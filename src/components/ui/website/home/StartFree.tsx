"use client";

import Container from "@/components/ui/Container";
import { gradientClasses } from "@/styles/gradients";
import startFree1 from "@/assets/startFree/startFree1.png";
import startFree2 from "@/assets/startFree/startFree2.png";
import startFree3 from "@/assets/startFree/startFree3.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const StartFree = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  const [headerInView, setHeaderInView] = useState(false);
  const [card1InView, setCard1InView] = useState(false);
  const [card2InView, setCard2InView] = useState(false);
  const [card3InView, setCard3InView] = useState(false);

  useEffect(() => {
    const opts = { threshold: 0.2 };
    const headerObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setHeaderInView(true);
    }, opts);
    const c1Obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setCard1InView(true);
    }, opts);
    const c2Obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setCard2InView(true);
    }, opts);
    const c3Obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setCard3InView(true);
    }, opts);

    if (headerRef.current) headerObs.observe(headerRef.current);
    if (card1Ref.current) c1Obs.observe(card1Ref.current);
    if (card2Ref.current) c2Obs.observe(card2Ref.current);
    if (card3Ref.current) c3Obs.observe(card3Ref.current);

    return () => {
      headerObs.disconnect();
      c1Obs.disconnect();
      c2Obs.disconnect();
      c3Obs.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#2C3E50] py-10 sm:py-12 md:py-16">
      <Container>
        <div
          ref={headerRef}
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ease-out will-change-transform will-change-opacity ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Start Free, Grow As You Hire. Find
            <br className="hidden sm:block" />
            Plans That Grow With You.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className={`bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-4 sm:p-6 rounded-lg flex flex-col h-full transition-all duration-700 ease-out will-change-transform will-change-opacity ${
              card1InView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex mb-3 sm:mb-4">
              <div
                style={{
                  boxShadow: "0 0 10px 0 #B1F1FF inset",
                }}
                className={`${gradientClasses.buttonBg} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}
              >
                <Image
                  src={startFree1}
                  alt="Post your Jobs."
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">
                Post your Jobs.
              </h3>
              <p className="text-gray-300 text-sm">
                Find the subscription that works best for your goals.
              </p>
            </div>
            <div className="flex justify-center mt-4 sm:mt-6">
              <Link href="https://portal.jobsinapp.de">
                <button
                  style={{
                    boxShadow: "0 0 10px 0 #B1F1FF inset",
                  }}
                  className={`${gradientClasses.buttonBg} text-white  cursor-pointer py-1.5 sm:py-2 px-4 w-full sm:px-6 rounded-lg text-xs sm:text-sm transition-colors`}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className={`bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-6 rounded-lg flex flex-col h-full transition-all duration-700 ease-out will-change-transform will-change-opacity ${
              card2InView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex mb-4">
              <div
                style={{
                  boxShadow: "0 0 10px 0 #B1F1FF inset",
                }}
                className={`${gradientClasses.buttonBg} w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <Image
                  src={startFree2}
                  alt="You need our support"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="grow">
              <h3 className="text-lg font-medium text-white mb-2">
                You need our support
              </h3>
              <p className="text-gray-300 text-sm">
                to find a perfect match for your posting.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Link href="https://portal.jobsinapp.de">
                <button
                  style={{
                    boxShadow: "0 0 10px 0 #B1F1FF inset",
                  }}
                  className={`${gradientClasses.buttonBg} text-white py-2 px-6 cursor-pointer rounded-lg text-sm w-full transition-colors`}
                >
                  Hire Employees
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            className={`bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-6 rounded-lg flex flex-col h-full transition-all duration-700 ease-out will-change-transform will-change-opacity ${
              card3InView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="flex mb-4">
              <div
                style={{
                  boxShadow: "0 0 10px 0 #B1F1FF inset",
                }}
                className={`${gradientClasses.buttonBg} w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <Image
                  src={startFree3}
                  alt="Contact & Support"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="grow">
              <h3 className="text-lg font-medium text-white mb-2">
                Contact & Support
              </h3>
              <p className="text-gray-300 text-sm">
                Here you will find opportunity to contact with us and find a
                better solution for your goals.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Link href="/contact-us">
                <button
                  style={{
                    boxShadow: "0 0 10px 0 #B1F1FF inset",
                  }}
                  className={`${gradientClasses.buttonBg} text-white cursor-pointer py-2 px-6 rounded-lg text-sm w-full transition-colors`}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartFree;
