"use client";

import starImg from "@/assets/modern-workforce/star.png";
import circleImg from "@/assets/modern-workforce/circle.png";
import lightningImg from "@/assets/modern-workforce/lightning.png";
import Container from "@/components/ui/Container";
import Image from "next/image";

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
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg">
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
          <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg">
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
