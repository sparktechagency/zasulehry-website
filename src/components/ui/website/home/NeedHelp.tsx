"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";
import Link from "next/link";

interface ContactInfo {
  phone?: string;
  email?: string;
  whatsApp?: string;
  [key: string]: any;
}

const NeedHelp = ({ contactInfo }: { contactInfo?: ContactInfo }) => {
  const [showHeader, setShowHeader] = useState(false);
  const [itemsVisible, setItemsVisible] = useState<[boolean, boolean, boolean]>(
    [false, false, false],
  );

  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;

          if (target === headerRef.current) {
            setShowHeader(true);
            observer.unobserve(target);
            return;
          }

          const idx = itemRefs.current.indexOf(target as HTMLDivElement);
          if (idx !== -1) {
            setItemsVisible(
              (prev) =>
                prev.map((v, i) => (i === idx ? true : v)) as [
                  boolean,
                  boolean,
                  boolean,
                ],
            );
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    if (headerRef.current) observer.observe(headerRef.current);
    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#2A3B4F] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2
          ref={headerRef}
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 transition-all duration-700 ease-out ${
            showHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          You Need Help
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Phone Contact */}
          <div
            ref={(el) => {
              itemRefs.current[0] = el;
            }}
            style={{ transitionDelay: "0ms" }}
            className={`transition-all duration-700 ease-out ${
              itemsVisible[0]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={`https://wa.me/${(contactInfo?.phone || "+1 234 567 890").replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="bg-[#4361EE] p-4 rounded-full mb-3 group-hover:bg-[#3249c5] group-hover:scale-110 transition-all duration-300">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-white font-medium mb-1 group-hover:text-[#4361EE] transition-colors">
                Phone
              </h3>
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                {contactInfo?.phone || "+1 234 567 890"}
              </span>
            </a>
          </div>

          {/* Email Contact */}
          <div
            ref={(el) => {
              itemRefs.current[1] = el;
            }}
            style={{ transitionDelay: "150ms" }}
            className={`transition-all duration-700 ease-out ${
              itemsVisible[1]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@jobsinapp.de`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="bg-[#16A249] p-4 rounded-full mb-3 group-hover:bg-[#12813a] group-hover:scale-110 transition-all duration-300">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-white font-medium mb-1 group-hover:text-[#16A249] transition-colors">
                Email
              </h3>
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                {contactInfo?.email || "info@jobsinapp.de"}
              </span>
            </a>
          </div>

          {/* Contact Form */}
          <div
            ref={(el) => {
              itemRefs.current[2] = el;
            }}
            style={{ transitionDelay: "300ms" }}
            className={`transition-all duration-700 ease-out ${
              itemsVisible[2]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="/contact-us"
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="bg-[#9D4EDD] p-4 rounded-full mb-3 group-hover:bg-[#7b3caf] group-hover:scale-110 transition-all duration-300">
                <FaCommentDots className="text-white text-xl" />
              </div>
              <h3 className="text-white font-medium mb-1 group-hover:text-[#9D4EDD] transition-colors">
                Contact Form
              </h3>
              <span className="bg-gray-700 group-hover:bg-gray-600 text-white text-sm py-1 px-4 rounded-md transition-colors mt-1">
                Send Message
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
