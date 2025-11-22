"use client";

import starImg from "@/assets/modern-workforce/star.png";
import circleImg from "@/assets/modern-workforce/circle.png";
import lightningImg from "@/assets/modern-workforce/lightning.png";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ModernWarkforce = () => {
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
    <section className="bg-[#2C3E50] py-16">
      <Container>
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out will-change-transform will-change-opacity ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white mb-4">
            NEXT GENERATION RECRUITMENT FOR
            <br />
            THE MODERN WORKFORCE
          </h2>
          <p className="text-xl text-white mb-4">
            Advance Hiring That Understands Talent.
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto">
            Our Platform Isn&apos;t Just Another ATS — It Uses Advanced
            Technology To Match You With The Right Candidates,
            <br />
            Analyze Applications Intelligently, And Streamline Your Hiring
            Process From Start To Finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div
            ref={card1Ref}
            className={`bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg transition-all duration-700 ease-out will-change-transform will-change-opacity ${
              card1InView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="bg-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src={starImg}
                alt="Smarter Matching"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Smarter Matching
            </h3>
            <p className="text-gray-300">
              AI Analyzes Skills, Experience, And Fit To Highlight The
              Candidates Who Truly Meet Your Needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            ref={card2Ref}
            className={`bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg transition-all duration-700 ease-out will-change-transform will-change-opacity ${
              card2InView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-[#16A249] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src={circleImg}
                alt="Intelligent Analysis"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Intelligent Analysis
            </h3>
            <p className="text-gray-300">
              Automatically Evaluate Applications With AI-Powered Insights And
              Recommendations.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            ref={card3Ref}
            className={`bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg transition-all duration-700 ease-out will-change-transform will-change-opacity ${
              card3InView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="bg-[#895AF6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src={lightningImg}
                alt="Streamlined Process"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Streamlined Process
            </h3>
            <p className="text-gray-300">
              From Posting To Hiring, Manage Everything Efficiently With
              Automated Workflows.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ModernWarkforce;
