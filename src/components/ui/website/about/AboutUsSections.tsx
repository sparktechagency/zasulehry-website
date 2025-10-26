"use client";

import Image from "next/image";
import Container from "../../Container";

const AboutUsSections = () => {
  return (
    <div className="bg-[#1E2A37] text-white py-20">
      <Container>
        {/* Who We Are Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 my-20">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Team meeting in office"
              width={600}
              height={400}
              className="w-full h-auto rounded-tl-4xl rounded-br-4xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg mb-6">
              JobsinApp Is A People-First Platform Built To Simplify The Way
              Employers And Job Seekers Connect. We Believe Employment Should Be
              Accessible, Efficient, And Empowering—For Everyone.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                <div>
                  <span className="font-semibold">Employers:</span> Can Post
                  Jobs, Manage Applications, And Hire With Confidence
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                <div>
                  <span className="font-semibold">Job Seekers:</span> Can
                  Discover Opportunities, Apply Easily, And Communicate Directly
                  With Employers.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                <div>
                  <span className="font-semibold">Boot Sides:</span> Benefit
                  From A Built-In Messaging System That Keeps Hiring Fast And
                  Transparent.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Business handshake"
              width={600}
              height={400}
              className="w-full h-auto rounded-tl-4xl rounded-br-4xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-4">
              At JobsinApp, Our Mission Is To Make Employment Accessible,
              Efficient, And Empowering For Everyone. We Aim To Simplify The Way
              Employers And Job Seekers Connect—By Providing A Smart,
              User-Friendly Platform That Supports Real-Time Communication,
              Transparent Hiring, And Meaningful Opportunities.
            </p>
            <p className="text-lg">
              We Believe That Finding The Right Job Or The Right Candidate
              Shouldn&apos;t Be Complicated. Whether You&apos;re Building A Team
              Or Building Your Career, JobsinApp Is Here To Support Your
              Journey—Every Step Of The Way.
            </p>
          </div>
        </div>

        {/* Why Choose JobsinApp Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 my-20">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt="Business professionals shaking hands"
              width={600}
              height={400}
              className="w-full h-auto rounded-tl-4xl rounded-br-4xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose JobsinApp
            </h2>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <span className="inline-flex items-center justify-center bg-teal-500 text-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <h3 className="text-xl font-semibold">Smart For Employers</h3>
              </div>
              <ul className="space-y-2 pl-8">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <div>Post Jobs In Minutes</div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <div>Track Applications Effortless</div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <div>Communicate Directly With Candidates</div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <div>Hire Faster With Real-Time Updates</div>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <span className="inline-flex items-center justify-center bg-teal-500 text-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <h3 className="text-xl font-semibold">
                  Empowering For Job Seekers
                </h3>
              </div>
              <ul className="space-y-2 pl-8">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <div>Discover Relevant Opportunities</div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <div>Apply Easily From Any Device</div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <div>Message Employers Directly</div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <div>Stay Informed Every Step Of The Way</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Team presentation"
              width={600}
              height={400}
              className="w-full h-auto rounded-tl-4xl rounded-br-4xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg mb-4">
              To Create A World Where Employment Is Seamless, Inclusive, And
              Accessible To All. JobsinApp Envisions A Future Where Every
              Employer Finds The Right Talent Effortlessly, And Every Job Seeker
              Discovers Meaningful Work With Confidence
            </p>
            <p className="text-lg">
              We Strive To Be More Than A Platform—We Aim To Be A Trusted Bridge
              Between Opportunity And Ambition, Powered By Smart Technology And
              Human-Centered Design
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSections;
