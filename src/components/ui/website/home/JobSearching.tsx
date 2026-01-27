"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import jobSearchingImg from "@/assets/banner/bannerBg.png";
import qrCode from "@/assets/jobSearchingHome/jobSearchingQR.png";
import { gradientClasses } from "@/styles/gradients";
import Link from "next/link";

const JobSearching = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showMockup, setShowMockup] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const mockupRef = useRef<HTMLDivElement | null>(null);
  const downloadRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            if (target === headerRef.current) {
              setShowHeader(true);
            } else if (target === mockupRef.current) {
              setShowMockup(true);
            } else if (target === downloadRef.current) {
              setShowDownload(true);
            } else if (target === ctaRef.current) {
              setShowCTA(true);
            }
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (mockupRef.current) observer.observe(mockupRef.current);
    if (downloadRef.current) observer.observe(downloadRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${gradientClasses.primaryBg} py-16 px-4`}>
      <div className="container mx-auto max-w-6xl">
        {/* Heading and Description */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            showHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Job Searching
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore Thousands Of Opportunities Across Industries.
            <br />
            Build Your Profile, Upload Your Resume, And Let Top Employers Find
            You.
            <br />
            You Can Download Our Mobile App To Use A Lot Of Services For Free.
          </p>
        </div>

        {/* Mobile App and Download Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-20">
          {/* Mobile App Mockup */}
          <div
            ref={mockupRef}
            style={{ transitionDelay: "120ms" }}
            className={`w-full lg:w-3/5 transition-all duration-700 ease-out ${
              showMockup
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src={jobSearchingImg}
              alt="Mobile App Mockup"
              className="w-full scale-125 h-auto"
              priority
            />
          </div>

          {/* Download Section */}
          <div
            ref={downloadRef}
            style={{ transitionDelay: "220ms" }}
            className={`w-full lg:w-2/5 text-white transition-all duration-700 ease-out ${
              showDownload
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#D259D3] mb-4">
              Download Our App
            </h3>

            <p className="mb-6 w-[80%]">
              Scan The QR Code To Download Our Mobile App And Access All
              Features On The Go.
            </p>

            {/* QR Codes */}
            <div className="flex justify-center lg:justify-start gap-8 mb-8">
              <div
                className="text-center transition-all duration-700 ease-out"
                style={{ transitionDelay: "300ms" }}
              >
                <div className="bg-white p-2 rounded-lg mb-2">
                  <Image
                    src={qrCode}
                    alt="Android QR Code"
                    width={120}
                    height={120}
                  />
                </div>
                <span>Play Store</span>
              </div>

              <div
                className="text-center transition-all duration-700 ease-out"
                style={{ transitionDelay: "380ms" }}
              >
                <div className="bg-white p-2 rounded-lg mb-2">
                  <Image
                    src={qrCode}
                    alt="Apple QR Code"
                    width={120}
                    height={120}
                  />
                </div>
                <span>Apple Store</span>
              </div>
            </div>

            {/* CTA Buttons */}
          </div>
        </div>
        <div
          ref={ctaRef}
          style={{ transitionDelay: "350ms" }}
          className={`flex flex-col justify-center items-center sm:flex-row gap-4 transition-all duration-700 ease-out ${
            showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            style={{ boxShadow: "0 0 10px 0 #B1F1FF inset" }}
            className={`${gradientClasses.primaryBg} px-8 py-3 flex items-center justify-center gap-2 rounded-md hover:opacity-90 transition-all cursor-pointer`}
          >
            <FaDownload /> Download Mobile App
          </button>

          <Link href="https://portal.jobsinapp.de">
            <button
              style={{ boxShadow: "0 0 10px 0 #B1F1FF inset" }}
              className={`${gradientClasses.primaryBg} px-8 cursor-pointer py-3 rounded-md hover:opacity-90 transition-all inline-block`}
            >
              Start Hiring Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobSearching;
