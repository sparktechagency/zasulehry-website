"use client";

import Container from "@/components/ui/Container";

const ModernWarkforce = () => {
  return (
    <section className="bg-[#2C3E50] py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white mb-4">
            AI-DRIVEN NEXT GENERATION RECRUITMENT FOR
            <br />
            THE MODERN WORKFORCE
          </h2>
          <p className="text-xl text-white mb-4">
            AI-Powered Hiring That Understands Talent.
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto">
            Our Platform Isn&apos;t Just Another ATS — It Uses Advanced AI
            Technology To Match You With The Right Candidates,
            <br />
            Analyze Applications Intelligently, And Streamline Your Hiring
            Process From Start To Finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg">
            <div className="bg-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
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
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg">
            <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg">
            <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
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
