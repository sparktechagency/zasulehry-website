"use client";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

const WhyNotOthers = () => {
  const features = [
    {
      id: 1,
      title: "No Hidden Fees Or Complicated Pricing",
      description:
        "Unlike Some Platforms, We Keep Pricing Transparent And Simple — You Always Know What You're Paying For.",
    },
    {
      id: 2,
      title: "No Overcrowded Job Boards",
      description:
        "Many Platforms Get Lost In The Noise. We Focus On Quality Over Quantity, Connecting You With Candidates Who Matter.",
    },
    {
      id: 3,
      title: "No Extra Tools Needed",
      description:
        "No Need To Juggle Multiple Apps Or Integrations — Everything You Need For Hiring Is Already Built In.",
    },
    {
      id: 4,
      title: "No Waiting, No Delays",
      description:
        "Instant Job Posting And Application Tracking Means You Can Move Faster Than On Traditional Platforms.",
    },
  ];

  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerInView, setHeaderInView] = useState(false);
  const [itemsInView, setItemsInView] = useState<boolean[]>(
    Array(features.length).fill(false)
  );

  useEffect(() => {
    const opts = { threshold: 0.2 };
    const headerObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setHeaderInView(true);
    }, opts);
    if (headerRef.current) headerObs.observe(headerRef.current);

    const itemObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = itemRefs.current.findIndex((el) => el === entry.target);
        if (idx !== -1) {
          setItemsInView((prev) => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        }
      });
    }, opts);
    itemRefs.current.forEach((el) => el && itemObs.observe(el));

    return () => {
      headerObs.disconnect();
      itemObs.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#2C3E50] py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2
          ref={headerRef}
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-10 transition-all duration-700 ease-out will-change-transform will-change-opacity ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Why Not Others?
        </h2>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-lg p-6 flex items-start gap-4 transition-all duration-700 ease-out will-change-transform will-change-opacity ${
                itemsInView[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="bg-red-500 rounded-full p-1 text-white text-sm mt-1">
                <FaTimes />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-1">
                  {feature.id}. {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNotOthers;
