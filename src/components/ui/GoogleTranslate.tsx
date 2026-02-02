/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __gtReady?: boolean;
    __applyTranslate?: (lang: string) => void;
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate() {
  // Patch DOM methods to handle NotFoundError from Google Translate conflicts
  useEffect(() => {
    const origRemove = Node.prototype.removeChild;
    const origAppend = Node.prototype.appendChild;
    const origInsert = Node.prototype.insertBefore;

    Node.prototype.removeChild = function <T extends Node>(child: T): T {
      try {
        return origRemove.call(this, child) as T;
      } catch (e: any) {
        if (e.name === "NotFoundError") return child;
        throw e;
      }
    };

    Node.prototype.appendChild = function <T extends Node>(child: T): T {
      try {
        return origAppend.call(this, child) as T;
      } catch (e: any) {
        if (e.name === "NotFoundError") return child;
        throw e;
      }
    };

    Node.prototype.insertBefore = function <T extends Node>(
      newNode: T,
      ref: Node | null,
    ): T {
      try {
        return origInsert.call(this, newNode, ref) as T;
      } catch (e: any) {
        if (e.name === "NotFoundError") return newNode;
        throw e;
      }
    };

    // No cleanup needed — safe to leave patched
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    // Create container if needed
    let container = document.getElementById("google-translate-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "google-translate-container";
      document.body.insertBefore(container, document.body.firstChild);
    }

    // Skip if script already loaded
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      try {
        if (!window.google?.translate?.TranslateElement) return;
        const target = document.getElementById("google_translate_element");
        if (!target) return;
        target.innerHTML = "";
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,de,fr,nl,ro,pl,uk,it",
            autoDisplay: false,
          },
          "google_translate_element",
        );
        window.__gtReady = true;
        console.log("Google Translate initialized");
      } catch (error) {
        console.debug("[Google Translate] Initialization error", error);
      }
    };

    // Define the apply function
    window.__applyTranslate = (targetLang: string) => {
      const setCookie = (lang: string) => {
        const domain = window.location.hostname.split(".").slice(-2).join(".");
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const expires = date.toUTCString();
        // Set for both exact domain and base domain
        document.cookie = `googtrans=/en/${lang}; expires=${expires}; path=/; SameSite=Lax`;
        if (domain.includes(".")) {
          document.cookie = `googtrans=/en/${lang}; expires=${expires}; path=/; domain=.${domain}; SameSite=Lax`;
        }
      };

      setCookie(targetLang);

      const tryChange = () => {
        const combo = document.querySelector(
          ".goog-te-combo",
        ) as HTMLSelectElement | null;
        if (combo) {
          if (combo.value !== targetLang) {
            combo.value = targetLang;
            combo.dispatchEvent(new Event("change", { bubbles: true }));
          }
          return true;
        }
        return false;
      };

      if (!tryChange()) {
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          if (tryChange() || attempts > 20) {
            clearInterval(interval);
            if (attempts > 20) {
              window.location.reload();
            }
          }
        }, 300);
      }
    };

    // Load the script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ display: "none" }}
      className="notranslate"
    />
  );
}
