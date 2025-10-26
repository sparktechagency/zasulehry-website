"use client";

import { FaMapMarkerAlt, FaArrowLeft, FaClock } from "react-icons/fa";
import Container from "../../Container";
import React, { useMemo } from "react";
import Image from "next/image";
import { gradientClasses } from "@/styles/gradients";

// Job details data structure
const jobDetailsData = [
  {
    id: "1",
    title: "Senior Business Analyst",
    company: "Sparktech Agency",
    location: "Dhaka Bangladesh",
    jobType: "Full Time",
    salary: "$200-$300/Month",
    postedDate: "20 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600&q=80",
    description:
      "We Are Seeking A Compassionate Nurse To Join Our Emergency Department, Providing Quality Care To Patients In A Fast-Paced Environment.",
    responsibilities: [
      "Patient Care: Provide Direct Care To Patients, Monitor Vital Signs, Administer Medications, Etc.",
      "Documentation: Maintain Patient Records And Ensure They Are Up To Date.",
      "Collaboration: Work Closely With Doctors, Nurses, And Healthcare Teams.",
      "Emergency Response: Respond Quickly To Patient Needs And Emergencies.",
    ],
    qualifications: [
      "Education: Bachelor's Degree In Nursing (BSN)* Or *Medical Degree (MD) Required.*",
      "Certifications: Certified Nursing Assistant (CNA)* Or *Board-Certified In Pediatrics.",
      "Experience: 2+ Years Of Experience In A Hospital Setting Preferred.*",
      "Skills: Strong Communication Skills, Attention To Detail, Critical Thinking.*",
    ],
  },
];

const JobDetailsPage = ({ id }: { id: string }) => {
  // Use useMemo to derive job details from ID
  const jobDetails = useMemo(() => {
    const job = jobDetailsData.find(job => job.id === id);
    return job || jobDetailsData[0]; // Fallback to first job if not found
  }, [id]);

  return (
    <Container>
      <div className="bg-[#1E2A37] rounded-lg overflow-hidden my-10 p-6 text-white">
        {/* Back button */}
        <button
          className="flex items-center text-teal-500 hover:text-teal-400 mb-6 transition-colors"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="mr-2" /> View Details
        </button>

        {/* Job header with image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden h-48 md:h-full">
              <Image
                src={jobDetails.image}
                alt={jobDetails.company}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {jobDetails.company}
            </h1>

            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="text-teal-500 mr-2" />
              <span>{jobDetails.location}</span>
            </div>

            <h2 className="text-xl font-semibold mb-3">{jobDetails.title}</h2>

            <div className="bg-[#263747] inline-block px-3 py-1 rounded-md mb-4">
              {jobDetails.jobType}
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div
                className={`text-xl font-semibold ${gradientClasses.textGradient}`}
              >
                {jobDetails.salary}
              </div>

              <div className="flex items-center text-gray-400">
                <FaClock className="mr-2" />
                <span>{jobDetails.postedDate}</span>
              </div>
            </div>

            <button
              className={`${gradientClasses.buttonBg} cursor-pointer text-white px-6 py-2 rounded-md transition-colors`}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Job Description</h3>
          <p className="text-gray-300 leading-relaxed">
            {jobDetails.description}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            {jobDetails.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* Qualifications */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            {jobDetails.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default JobDetailsPage;
