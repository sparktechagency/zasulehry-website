"use client";
import Container from "@/components/ui/Container";
import {
  FaUser,
  FaChartLine,
  FaEye,
  FaPaperPlane,
  FaRobot,
  FaCalendarAlt,
  FaWhatsapp,
  FaUserTie,
  FaComments,
  FaUsers,
} from "react-icons/fa";
import { gradientClasses } from "@/styles/gradients";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaCodeCompare } from "react-icons/fa6";

const WhatCanYouDo = () => {
  const features = [
    {
      icon: <FaUser className="text-pink-400" />,
      text: "Create Your Profile With Your Own Logo",
    },
    {
      icon: <FaChartLine className="text-teal-400" />,
      text: "You Have Your Own Dashboard",
    },
    {
      icon: <FaEye className="text-pink-400" />,
      text: "See Your Posted Jobs",
    },
    {
      icon: <FaPaperPlane className="text-teal-400" />,
      text: "You Can Post Jobs",
    },
    {
      icon: <FaRobot className="text-pink-400" />,
      text: "Advance Technology",
    },
    {
      icon: <FaCalendarAlt className="text-teal-400" />,
      text: "Manage Your Appointments",
    },
    {
      icon: <FaWhatsapp className="text-pink-400" />,
      text: "Use Whatsapp Support To Communicate With JobsinApp Team",
    },
    {
      icon: <FaWhatsapp className="text-teal-400" />,
      text: "Add A Whatsapp Link To Communicate With Candidates",
    },
    {
      icon: <FaUserTie className="text-pink-400" />,
      text: "Hire An Employee On JobsinApp Platform",
    },
    {
      icon: <FaUsers className="text-teal-400" />,
      text: "Create and Manage Shift Plans for your Employees",
    },
    {
      icon: <FaCodeCompare className="text-pink-400" />,
      text: "AI Salary Comparison",
    },
    {
      icon: <FaComments className="text-teal-400" />,
      text: "Subscribe For JobsinApp To Use A Lot Of Services Including Candidate Matching",
    },
  ];

  const headerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerInView, setHeaderInView] = useState(false);
  const [itemsInView, setItemsInView] = useState<boolean[]>(
    Array(features.length).fill(false),
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What You Can Do On JobsinApp .{" "}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`flex items-center gap-3 bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-4 rounded-md hover:shadow-md transition-all duration-700 ease-out will-change-transform will-change-opacity ${
                itemsInView[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
              <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                {feature.icon}
              </div>
              <p className="text-white text-sm md:text-base">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="https://portal.jobsinapp.de/post-job">
            <button
              style={{
                boxShadow: "0 0 10px 0 #7d8fa0 inset",
              }}
              className={`${gradientClasses.primaryBg} px-8 cursor-pointer py-3 rounded-md hover:opacity-90 transition-all inline-block`}
            >
              Start Posting Now
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WhatCanYouDo;
