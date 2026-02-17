"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/constants/navigation";
import { gradientClasses } from "@/styles/gradients";
import Container from "@/components/ui/Container";
import logo from "@/assets/banner/logo.png";
import Image from "next/image";
import Button from "../ui/Button";
import { FaEarthAsia, FaChevronDown } from "react-icons/fa6";

const languages = [
  { name: "English", code: "en", country: "gb" },
  { name: "German", code: "de", country: "de" },
  { name: "French", code: "fr", country: "fr" },
  { name: "Dutch", code: "nl", country: "nl" },
  { name: "Romania", code: "ro", country: "ro" },
  { name: "Polish", code: "pl", country: "pl" },
  { name: "Ukrainian", code: "uk", country: "ua" },
  { name: "Italian", code: "it", country: "it" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang: (typeof languages)[0]) => {
    setCurrentLang(lang);

    // Set cookie immediately as a fallback for high reliability
    const domain = window.location.hostname.split(".").slice(-2).join(".");
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    const expires = date.toUTCString();
    document.cookie = `googtrans=/en/${lang.code}; expires=${expires}; path=/; SameSite=Lax`;
    if (domain.includes(".")) {
      document.cookie = `googtrans=/en/${lang.code}; expires=${expires}; path=/; domain=.${domain}; SameSite=Lax`;
    }

    if (window.__applyTranslate) {
      window.__applyTranslate(lang.code);
    }
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Sync state with cookie on mount
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const cookieValue = getCookie("googtrans");
    if (cookieValue) {
      const langCode = cookieValue.split("/").pop();
      const savedLang = languages.find((l) => l.code === langCode);
      if (savedLang) setCurrentLang(savedLang);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`${gradientClasses.primaryBg}  sticky top-0 z-50`}>
      <Container>
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Zasulehry"
                width={7657665}
                height={7575750}
                className="md:w-[95px] w-[75px] h-[60px] md:h-[75px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold shadow-[inset_0_0_10px_0_#B1F1FF]"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 ">
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-2 rounded-md px-4 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/20 font-medium hover:bg-white/30 transition-all duration-200"
                >
                  <img
                    src={`https://flagcdn.com/w40/${currentLang.country}.png`}
                    alt={currentLang.name}
                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                  />
                  <FaChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1e2a3a]/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50">
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang)}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 transition-colors flex items-center space-x-3 ${
                            currentLang.code === lang.code
                              ? "text-blue-400 font-bold bg-white/5"
                              : "text-white/80"
                          }`}
                        >
                          <img
                            src={`https://flagcdn.com/w40/${lang.country}.png`}
                            alt={lang.name}
                            className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                          />
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Button href="https://portal.jobsinapp.de/login" variant="glass">
                Login
              </Button>
              <Button href="https://portal.jobsinapp.de/method" variant="glass">
                Register
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${gradientClasses.primaryBg} shadow-xl py-5`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white border-t border-white/20">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-white font-bold border-l-4 border-white bg-white/10"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang);
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm px-3 py-2 rounded-lg border transition-all duration-200 flex items-center justify-center space-x-3 ${
                      currentLang.code === lang.code
                        ? "bg-white/20 border-white/40 text-white font-bold"
                        : "bg-white/5 border-white/10 text-white/70"
                    }`}
                  >
                    <img
                      src={`https://flagcdn.com/w40/${lang.country}.png`}
                      alt={lang.name}
                      className="w-5 h-3.5 object-cover rounded-sm"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
              <Button href="https://portal.jobsinapp.de/login" variant="glass">
                Login
              </Button>
              <Button href="https://portal.jobsinapp.de/method" variant="glass">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
