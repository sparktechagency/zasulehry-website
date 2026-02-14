"use client";

import { useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Container from "../../Container";
import JobCard from "../../JobCard";
import SearchFilter, { FilterData } from "../../SearchFilter";
import GoogleMapWithAutocomplete from "../../GoogleMapWithAutocomplete";
import { LuLoader } from "react-icons/lu";

// Job data structure interface
export interface Job {
  id: number | string;
  title: string;
  sector: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  postedDays: number;
  coordinates: [number, number] | null; // [lng, lat] from API
  image: string;
}

interface PaginationData {
  totalPage: number;
  currentPage: number;
}

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

interface JobsMainPageProps {
  initialJobs: Job[];
  pagination: PaginationData;
  categories: any[];
}

const JobsMainPage = ({
  initialJobs = [],
  pagination,
  categories = [],
}: JobsMainPageProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Clear query params on page reload (but not on navigation from home)
  useEffect(() => {
    const navigatedFromHome = sessionStorage.getItem("navigatedToJobs");

    if (navigatedFromHome) {
      // This is a navigation from home, remove the flag and keep params
      sessionStorage.removeItem("navigatedToJobs");
    } else if (searchParams.toString()) {
      // This is a reload, clear all params
      startTransition(() => {
        router.replace("/jobs", { scroll: false });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateQueryParams = (newParams: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (
        value === null ||
        value === "" ||
        value === "Category" ||
        value === "Sub Category" ||
        value === "Job Type" ||
        value === "Experience"
      ) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Reset to page 1 on search/filter if not explicitly setting page
    if (!newParams.page) {
      params.set("page", "1");
    }

    startTransition(() => {
      router.push(`/jobs?${params.toString()}`, { scroll: false });
    });
  };

  const handleFilter = (filterData: FilterData) => {
    const params: Record<string, string | null> = {};
    if (filterData.category) params.category = filterData.category;
    if (filterData.subCategory) params.subCategory = filterData.subCategory;
    if (filterData.employmentType) params.jobType = filterData.employmentType;
    if (filterData.experience) params.experience = filterData.experience;
    if (filterData.salaryType) params.salaryType = filterData.salaryType;
    if (filterData.salaryValue)
      params.salaryAmount = filterData.salaryValue.toString();
    if (filterData.distanceValue)
      params.distance = filterData.distanceValue.toString();

    updateQueryParams(params);
  };

  const handlePageChange = (pageNo: number) => {
    updateQueryParams({ page: pageNo.toString() });
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const handleResetFilters = () => {
    updateQueryParams({
      category: null,
      subCategory: null,
      jobType: null,
      experience: null,
      salaryType: null,
      salaryAmount: null,
      distance: null,
      lat: null,
      lng: null,
    });
  };

  const handleLocationSelect = (location: {
    lat: number;
    lng: number;
    placeName: string;
  }) => {
    updateQueryParams({
      lat: location.lat.toString(),
      lng: location.lng.toString(),
    });
  };

  return (
    <div className="relative">
      {/* Global Loading Spinner */}
      {isPending && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9999 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <LuLoader className="text-teal-500 animate-spin" size={60} />
            <p className="text-white text-xl font-medium tracking-wide">
              Filtering Jobs...
            </p>
          </div>
        </div>
      )}

      <Container>
        <div className="my-10">
          <GoogleMapWithAutocomplete
            lat={
              searchParams.get("lat")
                ? parseFloat(searchParams.get("lat")!)
                : undefined
            }
            lng={
              searchParams.get("lng")
                ? parseFloat(searchParams.get("lng")!)
                : undefined
            }
            jobMarkers={initialJobs
              .filter(
                (job) =>
                  job.coordinates &&
                  Array.isArray(job.coordinates) &&
                  job.coordinates.length === 2,
              )
              .map((job) => ({
                id: job.id,
                title: job.title,
                coordinates: job.coordinates as [number, number],
              }))}
          />
        </div>

        <div className="relative w-full mb-8">
          <SearchFilter
            onFilter={handleFilter}
            onReset={handleResetFilters}
            onLocationSelect={handleLocationSelect}
            initialCategories={categories}
            initialSearchValue={searchParams.get("placeName") || ""}
            placeholder="Search Location"
            className="max-w-full mx-auto"
            isLoading={isPending}
          />
        </div>

        <div className="flex justify-between items-center mb-7">
          <h1 className="text-2xl font-semibold text-white">
            Recently Posted Jobs
          </h1>
          <p className="text-white cursor-pointer">See All</p>
        </div>

        <div>
          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-xs sm:max-w-none">
            {initialJobs.length > 0 ? (
              initialJobs.map((job) => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  company={job.company}
                  location={job.location}
                  title={job.title}
                  sector={job.sector}
                  salary={job.salary}
                  type={job.jobType}
                  postedDays={job.postedDays}
                  image={job.image}
                />
              ))
            ) : (
              <div className="col-span-full py-10 text-center text-gray-400">
                No jobs found.
              </div>
            )}
          </div>

          {/* Pagination */}
          {pagination.totalPage > 1 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default JobsMainPage;
