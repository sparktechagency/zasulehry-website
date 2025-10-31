"use client";

import Container from "@/components/ui/Container";
import { gradientClasses } from "@/styles/gradients";
import startFree1 from "@/assets/startFree/startFree1.png";
import startFree2 from "@/assets/startFree/startFree2.png";
import startFree3 from "@/assets/startFree/startFree3.png";
import Image from "next/image";

const StartFree = () => {
  return (
    <section className="bg-[#2C3E50] py-10 sm:py-12 md:py-16">
      <Container>
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Start Free, Grow As You Hire. Find
            <br className="hidden sm:block" />
            Plans That Grow With You.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-4 sm:p-6 rounded-lg flex flex-col h-full">
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
              <button
                style={{
                  boxShadow: "0 0 10px 0 #B1F1FF inset",
                }}
                className={`${gradientClasses.buttonBg} text-white  cursor-pointer py-1.5 sm:py-2 px-4 w-full sm:px-6 rounded-lg text-xs sm:text-sm transition-colors`}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-6 rounded-lg flex flex-col h-full">
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
              <button
                style={{
                  boxShadow: "0 0 10px 0 #B1F1FF inset",
                }}
                className={`${gradientClasses.buttonBg} text-white py-2 px-6 cursor-pointer rounded-lg text-sm w-full transition-colors`}
              >
                Hire Employees
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-6 rounded-lg flex flex-col h-full">
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
              <button
                style={{
                  boxShadow: "0 0 10px 0 #B1F1FF inset",
                }}
                className={`${gradientClasses.buttonBg} text-white cursor-pointer py-2 px-6 rounded-lg text-sm w-full transition-colors`}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartFree;
