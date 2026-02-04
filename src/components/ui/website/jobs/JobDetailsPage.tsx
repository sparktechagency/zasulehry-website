"use client";

import { FaMapMarkerAlt, FaArrowLeft, FaClock, FaTimes } from "react-icons/fa";
import Container from "../../Container";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { gradientClasses } from "@/styles/gradients";
import Link from "next/link";

// Job details data structure interface
export interface JobDetail {
  id: string;
  title: string;
  sector: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  postedDate: string;
  image: string;
  aboutCompany: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

interface JobDetailsPageProps {
  id: string;
  initialData: JobDetail;
}
const JobDetailsPage = ({ id, initialData }: JobDetailsPageProps) => {
  // State for image popup and apply modal
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

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
            <div
              className="rounded-lg overflow-hidden h-48 md:h-full cursor-pointer relative group"
              onClick={() => setIsImagePopupOpen(true)}
            >
              <Image
                src={ jobDetails.image ?
                  jobDetails.image?.startsWith("http")
                    ? jobDetails.image
                    : `${process.env.NEXT_PUBLIC_IMAGE_URL}${jobDetails.image}`
                    : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                }
                alt={jobDetails.company}
                width={400}
                height={200}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
                  Click to view
                </span>
              </div>
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

            <h2 className="text-sm font-semibold text-gray-400 mb-3">{jobDetails.sector}</h2>
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
              onClick={() => setIsApplyModalOpen(true)}
              className={`${gradientClasses.buttonBg} cursor-pointer text-white px-6 py-2 rounded-md transition-colors`}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* About Company */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">About Company</h3>
          <p className="text-gray-300 leading-relaxed">
            {jobDetails.aboutCompany}
          </p>
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

      {/* Image Popup Modal */}
      {isImagePopupOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsImagePopupOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsImagePopupOpen(false);
              }}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-teal-400 transition-colors"
            >
              <FaTimes />
            </button>
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  jobDetails.image?.startsWith("http")
                    ? jobDetails.image
                    : `${process.env.NEXT_PUBLIC_IMAGE_URL}${jobDetails.image}`
                }
                alt={jobDetails.company}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              />
            </div>
          </div>
        </div>
      )}
      {/* Apply Now Download Modal */}
      {isApplyModalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsApplyModalOpen(false)}
        >
          <div
            className="bg-[#1E2A37] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaArrowLeft className="text-teal-500 text-3xl rotate-180" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Apply via Our Mobile App
              </h3>
              <p className="text-gray-400 mb-8">
                To apply for this position, please download our app from the
                store. It's fast, easy, and secure.
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all group"
                >
                  <svg
                    className="w-8 h-8 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-gray-500 -mb-1">
                      Get it on
                    </div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </Link>

                <Link
                  href="https://apple.com/app-store"
                  target="_blank"
                  className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all group"
                >
                  <svg
                    className="w-8 h-8 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-gray-500 -mb-1">
                      Download on the
                    </div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default JobDetailsPage;
