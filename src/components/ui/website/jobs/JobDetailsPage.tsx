"use client";

import { FaMapMarkerAlt, FaArrowLeft, FaClock } from "react-icons/fa";
import Container from "../../Container";
import React, { useMemo } from "react";
import Image from "next/image";
import { gradientClasses } from "@/styles/gradients";
import Link from "next/link";

// Job details data structure interface
export interface JobDetail {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  postedDate: string;
  image: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

interface JobDetailsPageProps {
  id: string;
  initialData: JobDetail;
}

const JobDetailsPage = ({ id, initialData }: JobDetailsPageProps) => {
  // Use the jobData from props
  const jobDetails = initialData;

  if (!jobDetails) return null;

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

            <Link
              href={`https://portal.jobsinapp.de/view-details-jobs/${jobDetails.id}`}
            >
              <button
                className={`${gradientClasses.buttonBg} cursor-pointer text-white px-6 py-2 rounded-md transition-colors`}
              >
                Apply Now
              </button>
            </Link>
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
        {jobDetails.responsibilities &&
          jobDetails.responsibilities.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {jobDetails.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}

        {/* Qualifications */}
        {jobDetails.qualifications && jobDetails.qualifications.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {jobDetails.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default JobDetailsPage;
