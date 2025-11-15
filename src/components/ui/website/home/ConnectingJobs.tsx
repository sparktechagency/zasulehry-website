"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import connectingImg from "@/assets/connectingJobImg.png";

const ConnectingJobs = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [headerInView, setHeaderInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  const [contentInView, setContentInView] = useState(false);

  useEffect(() => {
    const opts = { threshold: 0.2 };
    const headerObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setHeaderInView(true);
    }, opts);
    const imgObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setImageInView(true);
    }, opts);
    const contentObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setContentInView(true);
    }, opts);

    if (headerRef.current) headerObs.observe(headerRef.current);
    if (imageRef.current) imgObs.observe(imageRef.current);
    if (contentRef.current) contentObs.observe(contentRef.current);

    return () => {
      headerObs.disconnect();
      imgObs.disconnect();
      contentObs.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#2C3E50] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2
          ref={headerRef}
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 transition-all duration-700 ease-out will-change-transform will-change-opacity ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Connecting Jobs & Talent For No Cost
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <div
              ref={imageRef}
              className={`bg-white p-4 rounded-tr-4xl rounded-bl-4xl transition-all duration-700 ease-out will-change-transform will-change-opacity ${
                imageInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Image
                src={connectingImg}
                alt="Are You Ready?"
                className="w-full h-[300px] object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            ref={contentRef}
            className={`w-full md:w-1/2 text-white transition-all duration-700 ease-out will-change-transform will-change-opacity ${
              contentInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-2xl font-bold mb-4">Job Posting</h3>

            <p className="mb-4">
              Create Job Postings In Minutes. Reach Thousands Of Qualified
              Candidates, And Manage Applications Effortlessly.
            </p>

            <p className="mb-4">
              Our Tools Help You Shortlist The Best Talent With Built-In
              Filtering, Messaging, And Analytics.
            </p>

            <p className="mb-4">
              You Can Use A Lot Of Services On Our Platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectingJobs;
