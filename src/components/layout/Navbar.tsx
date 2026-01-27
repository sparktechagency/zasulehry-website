"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/constants/navigation";
import { gradientClasses } from "@/styles/gradients";
import Container from "@/components/ui/Container";
import logo from "@/assets/banner/logo.png";
import Image from "next/image";
import Button from "../ui/Button";
import { FaEarthAsia } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <button className="rounded-full p-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold">
                <FaEarthAsia size={25} />
              </button>
              <Button href="https://portal.jobsinapp.de/login" variant="glass">
                Login
              </Button>
              <Button href="https://portal.jobsinapp.de/signup" variant="glass">
                Sign Up
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
            <div className="flex items-center space-x-4 text-white">
              <button className="rounded-full p-2 bg-white/10 backdrop-blur-sm border text-white border-white/20 font-bold">
                <FaEarthAsia size={25} />
              </button>
              <Button href="https://portal.jobsinapp.de/login" variant="glass">
                Login
              </Button>
              <Button href="https://portal.jobsinapp.de/signup" variant="glass">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
