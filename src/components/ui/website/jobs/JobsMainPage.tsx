"use client";

import { FaSearch } from "react-icons/fa";
import Container from "../../Container";
import { useState } from "react";
import JobCard from "../../JobCard";

// Job data structure
const jobsData = [
  {
    id: 1,
    title: "Senior Business Analyst",
    company: "Sparktech Agency",
    location: "California/USA",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 2,
    title: "Flutter App Development",
    company: "Batopia Groups",
    location: "Dhaka/Bangladesh",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 3,
    title: "Mobile App Development",
    company: "Vivo Soft Company",
    location: "London/Gaming",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 4,
    title: "Senior UX/UI Designer",
    company: "Slot Tech Agency",
    location: "California/USA",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 5,
    title: "Senior Business Analyst",
    company: "Sparktech Agency",
    location: "California/USA",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 3,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 6,
    title: "Flutter App Development",
    company: "Batopia Groups",
    location: "Dhaka/Bangladesh",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 3,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 7,
    title: "Mobile App Development",
    company: "Vivo Soft Company",
    location: "London/Gaming",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 3,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 8,
    title: "Senior UX/UI Designer",
    company: "Slot Tech Agency",
    location: "California/USA",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 3,
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 9,
    title: "Senior Business Analyst",
    company: "Sparktech Agency",
    location: "California/USA",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 10,
    title: "Flutter App Development",
    company: "Batopia Groups",
    location: "Dhaka/Bangladesh",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 11,
    title: "Mobile App Development",
    company: "Vivo Soft Company",
    location: "London/Gaming",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 12,
    title: "Senior UX/UI Designer",
    company: "Slot Tech Agency",
    location: "California/USA",
    salary: "$200-$300/Month",
    jobType: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
];

// Pagination Component
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center mt-10 mb-5 space-x-1">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 text-gray-400 hover:border-teal-500 hover:text-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &lt;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex items-center justify-center w-8 h-8 rounded-full ${
            currentPage === page
              ? "bg-teal-500 text-white"
              : "border border-gray-700 text-gray-400 hover:border-teal-500 hover:text-teal-500"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 text-gray-400 hover:border-teal-500 hover:text-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &gt;
      </button>
    </div>
  );
};

const JobsMainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(jobsData.length / jobsPerPage);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <div>
      <Container>
        <div className="my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1034.8187995501783!2d90.43006822442457!3d23.724543698613555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1761459003902!5m2!1sen!2sbd"
            width="1200"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full"
          ></iframe>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search Location/Job"
            className="w-full py-3 px-4 pr-12 rounded-full bg-[#1E2A37] text-white border border-gray-700 focus:outline-none focus:border-teal-500 transition-colors"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-500 hover:text-teal-400 transition-colors"
            aria-label="Search"
          >
            <FaSearch size={18} />
          </button>
        </div>

        <div className="flex justify-between items-center mb-7">
          <h1 className="text-2xl font-semibold text-white">
            Recently Posted Jobs
          </h1>
          <p className="text-white cursor-pointer">See All</p>
        </div>

        <div>
          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {currentJobs?.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                company={job.company}
                location={job.location}
                position={job.title}
                salary={job.salary}
                type={job.jobType}
                postedDays={job.postedDays}
                image={job.image}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Container>
    </div>
  );
};

export default JobsMainPage;
