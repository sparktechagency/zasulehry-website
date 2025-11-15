"use client";
import React, { useEffect, useRef, useState } from "react";
import { gradientClasses } from "@/styles/gradients";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import bannerBg from "@/assets/banner/bannerBg.png";
import googlePlay from "@/assets/banner/googlePlayLogo.png";
import applePlay from "@/assets/banner/appleLogo.png";

const Banner = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRightTitle, setShowRightTitle] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showStores, setShowStores] = useState(false);

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightTitleRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const storesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          if (target === leftRef.current) {
            setShowLeft(true);
          } else if (target === rightTitleRef.current) {
            setShowRightTitle(true);
          } else if (target === imageRef.current) {
            setShowImage(true);
          } else if (target === storesRef.current) {
            setShowStores(true);
          }
          observer.unobserve(target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightTitleRef.current) observer.observe(rightTitleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (storesRef.current) observer.observe(storesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${gradientClasses.primaryBg} w-full py-24 flex items-center justify-center`}
    >
      <Container className="md:flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div
          ref={leftRef}
          className={`lg:w-1/2 mb-10 lg:mb-0 transition-all duration-700 ease-out ${
            showLeft ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Next-Level
            <br />
            Recruitment With
            <br />
            <span className="text-[#FF69B4] md:text-7xl font-bold">
              AI Technology
            </span>
          </h1>
          <p className="text-white/90 mb-8 max-w-lg text-base md:text-lg">
            Our AI Doesn&apos;t Just Track Applicants — It
            <br />
            Intelligently Matches The Right Talent To Your
            <br />
            Roles.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/hiring" variant="glass">
              Start Hiring Now
            </Button>
            <Button href="/jobs" variant="glass">
              Find Job
            </Button>
          </div>
        </div>

        {/* Right content - Mobile app mockup */}
        <div className="lg:w-1/2 flex flex-col">
          <h1
            ref={rightTitleRef}
            className={`text-2xl md:text-4xl text-center text-white leading-tight transition-all duration-700 ease-out ${
              showRightTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Download Our Mobile App
          </h1>
          <div
            ref={imageRef}
            style={{ transitionDelay: "120ms" }}
            className={`transition-all duration-700 ease-out ${
              showImage ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src={bannerBg}
              alt="Mobile App Mockup"
              width={765546300}
              height={6754646600}
              className="h-full w-full pt-20 scale-125 transform"
            />
          </div>
          <div
            ref={storesRef}
            style={{ transitionDelay: "240ms" }}
            className={`flex items-center justify-center gap-2 transition-all duration-700 ease-out ${
              showStores ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link href="">
              <div className="flex bg-white rounded-sm py-2 px-4 md:px-10 items-center justify-center gap-2">
                <Image
                  src={googlePlay}
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="text-black text-sm">get the app on</p>
                  <p className="text-[#2A7D7D] text-md">Google Play</p>
                </div>
              </div>
            </Link>
            <Link href="">
              <div className="flex bg-white rounded-sm py-2 px-4 md:px-10 items-center justify-center gap-2">
                <Image
                  src={applePlay}
                  alt="Apple Store"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="text-black text-sm">Download on</p>
                  <p className="text-[#2A7D7D] text-md">Apple Store</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
