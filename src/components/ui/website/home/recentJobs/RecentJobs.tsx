"use client";

import { useRef } from "react";
import Container from "@/components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation } from "swiper/modules";
import JobCard from "@/components/ui/JobCard";
import SearchFilter, { FilterData } from "@/components/ui/SearchFilter";
import GoogleMapWithAutocomplete from "@/components/ui/GoogleMapWithAutocomplete";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gradientClasses } from "@/styles/gradients";
import { useRouter } from "next/navigation";

interface JobWithCoordinates {
  id: string | number;
  title?: string;
  position?: string;
  coordinates?: [number, number] | null;
  [key: string]: any;
}

interface RecentJobsProps {
  initialJobs?: JobWithCoordinates[];
  categories?: any[];
}

const RecentJobs = ({ initialJobs = [], categories = [] }: RecentJobsProps) => {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/jobs?searchTerm=${encodeURIComponent(query)}`);
    }
  };

  const handleFilter = (filterData: FilterData) => {
    const params = new URLSearchParams();
    if (filterData.category) params.set("category", filterData.category);
    if (filterData.subCategory)
      params.set("subCategory", filterData.subCategory);
    if (filterData.employmentType)
      params.set("jobType", filterData.employmentType);
    if (filterData.experience) params.set("experience", filterData.experience);
    if (filterData.salaryType) params.set("salaryType", filterData.salaryType);
    if (filterData.salaryValue)
      params.set("salaryAmount", filterData.salaryValue.toString());

    router.push(`/jobs?${params.toString()}`);
  };

  const handleLocationSelect = (location: {
    lat: number;
    lng: number;
    placeName: string;
  }) => {
    // Set flag to indicate this is a navigation, not a reload
    sessionStorage.setItem("navigatedToJobs", "true");
    router.push(
      `/jobs?lat=${location.lat}&lng=${location.lng}&placeName=${encodeURIComponent(location.placeName)}`,
    );
  };

  // Prepare job markers for the map
  const jobMarkers = initialJobs
    .filter(
      (job) =>
        job.coordinates &&
        Array.isArray(job.coordinates) &&
        job.coordinates.length === 2,
    )
    .map((job) => ({
      id: job.id,
      title: job.title || job.position || "Job",
      coordinates: job.coordinates as [number, number],
    }));

  return (
    <div className="bg-[#2C3E50] py-10">
      <Container>
        <div className="my-10">
          <GoogleMapWithAutocomplete jobMarkers={jobMarkers} />
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <SearchFilter
            onFilter={handleFilter}
            onLocationSelect={handleLocationSelect}
            initialCategories={categories}
            placeholder="Search Location"
            className="max-w-full mx-auto"
          />
        </div>

        {/* Filter Modal is now handled by the SearchFilter component */}

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
            {initialJobs.map((job) => (
              <SwiperSlide key={job.id}>
                <JobCard
                  id={job.id}
                  company={job.company}
                  location={job.location}
                  position={job.position || job.title || ""}
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
            style={{
              boxShadow: "0 0 10px 0 #B1F1FF inset",
            }}
            className={`${gradientClasses.buttonBg} absolute left-5 md:left-1 cursor-pointer top-1/2 -translate-y-1/2 -ml-5 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg z-10 transition-colors`}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            style={{
              boxShadow: "0 0 10px 0 #B1F1FF inset",
            }}
            className={`${gradientClasses.buttonBg} absolute cursor-pointer md:right-1 right-5 top-1/2 -translate-y-1/2 -mr-5 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg z-10 transition-colors`}
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
