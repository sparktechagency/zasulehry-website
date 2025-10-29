"use client";

import Container from "@/components/ui/Container";
import { gradientClasses } from "@/styles/gradients";

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
          <div className="bg-[#1E2A37] p-4 sm:p-6 rounded-lg">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div
                className={`${gradientClasses.buttonBg} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-white text-center mb-1 sm:mb-2">
              Post your Jobs.
            </h3>
            <p className="text-gray-300 text-center text-xs sm:text-sm mb-4 sm:mb-6">
              Find the subscription that works best for your goals.
            </p>
            <div className="flex justify-center">
              <button
                className={`${gradientClasses.buttonBg} text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-xs sm:text-sm transition-colors`}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1E2A37] p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <div
                className={`${gradientClasses.buttonBg} w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-white text-center mb-2">
              You need our support
            </h3>
            <p className="text-gray-300 text-center text-sm mb-6">
              to find a perfect match for your posting.
            </p>
            <div className="flex justify-center">
              <button
                className={`${gradientClasses.buttonBg} text-white py-2 px-6 rounded-full text-sm transition-colors`}
              >
                Hire Employees
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1E2A37] p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <div
                className={`${gradientClasses.buttonBg} w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-white text-center mb-2">
              Contact & Support
            </h3>
            <p className="text-gray-300 text-center text-sm mb-6">
              Here you will find opportunity to contact with us and find a
              better solution for your goals.
            </p>
            <div className="flex justify-center">
              <button
                className={`${gradientClasses.buttonBg} text-white py-2 px-6 rounded-full text-sm transition-colors`}
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
