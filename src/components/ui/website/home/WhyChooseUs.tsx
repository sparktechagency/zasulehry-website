"use client";
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Effortless Hiring, Every Time, Very Easy.",
      description:
        "We Use AI Technology To Find A Perfect Match. We Offer Free Services And Free Job Posting For Everyone. Post Jobs, Manage Applications, And Connect With Top Talent — All In One Simple, Intuitive Platform. No More Juggling Multiple Tools.",
    },
    {
      id: 2,
      title: "Reach The Right Candidates Fast",
      description:
        "Our Advanced Matching Algorithms And Wide Network Ensure Your Job Posts Get Seen By Qualified Candidates Who Fit Your Needs.",
    },
    {
      id: 3,
      title: "Flexible Plans For Every Business",
      description:
        "Whether You're A Startup Or A Large Enterprise, Our Subscription Tiers Grow With You — Only Pay For What You Actually Need.",
    },
    {
      id: 4,
      title: "Insightful Analytics",
      description:
        "Track The Performance Of Your Job Posts And Make Smarter Hiring Decisions With Data-Driven Insights.",
    },
    {
      id: 5,
      title: "Support You Can Count On",
      description:
        "Our Friendly Support Team Is Here Whenever You Need Guidance, From Posting Jobs To Onboarding New Talent.",
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
          Why Choose Us?
        </h2>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`bg-[#FFFFFF1A] border border-[#FFFFFF1B] rounded-lg p-6 flex items-start gap-4 transition-all duration-700 ease-out will-change-transform will-change-opacity ${
                itemsInView[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="text-[#4cd5c5] text-xl mt-1">
                <FaCheckCircle />
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

export default WhyChooseUs;
