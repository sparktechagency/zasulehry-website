"use client";

import { useRef } from "react";
import Container from "@/components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Navigation } from "swiper/modules";
import JobCard from "@/components/ui/JobCard";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { gradientClasses } from "@/styles/gradients";

const jobs = [
  {
    id: 1,
    company: "Sparktech Agency",
    location: "California, USA",
    position: "Senior Business Analyst",
    salary: "$200–$300/Month",
    type: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 2,
    company: "Batopia Groups",
    location: "Dhaka, Bangladesh",
    position: "Flutter App Development",
    salary: "$200–$300/Month",
    type: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 3,
    company: "Vivo Soft Company",
    location: "London, Gaming",
    position: "Mobile App Development",
    salary: "$200–$300/Month",
    type: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 4,
    company: "Slat Tech Agency",
    location: "California, USA",
    position: "Senior UX/UI Designer",
    salary: "$200–$300/Month",
    type: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 5,
    company: "Vivo Soft Company",
    location: "London, Gaming",
    position: "Mobile App Development",
    salary: "$200–$300/Month",
    type: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
  {
    id: 6,
    company: "Slat Tech Agency",
    location: "California, USA",
    position: "Senior UX/UI Designer",
    salary: "$200–$300/Month",
    type: "Full Time",
    postedDays: 2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
  },
];

const RecentJobs = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-[#2C3E50] py-10">
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
            className="w-full py-3 px-4 pr-12 rounded-full bg-linear-to-b from-white/10 to-white/5 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-teal-500 transition-colors"
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

        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
          >
            {jobs.map((job) => (
              <SwiperSlide key={job.id}>
                <JobCard
                  id={job.id}
                  company={job.company}
                  location={job.location}
                  position={job.position}
                  salary={job.salary}
                  type={job.type}
                  postedDays={job.postedDays}
                  image={job.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${gradientClasses.buttonBg} absolute left-0 top-1/2 -translate-y-1/2 -ml-5 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg z-10 transition-colors`}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`${gradientClasses.buttonBg} absolute right-0 top-1/2 -translate-y-1/2 -mr-5 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg z-10 transition-colors`}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default RecentJobs;
