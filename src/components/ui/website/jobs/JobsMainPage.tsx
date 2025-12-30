"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Container from "../../Container";
import JobCard from "../../JobCard";
import SearchFilter, { FilterData } from "../../SearchFilter";

// Job data structure interface
export interface Job {
  id: number | string;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  postedDays: number;
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

  const updateQueryParams = (newParams: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (
        value === null ||
        value === "" ||
        value === "Category" ||
        value === "Sub Category" ||
        value === "Full Time" ||
        value === "With Experience"
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

    router.push(`/jobs?${params.toString()}`, { scroll: false });
  };

  const handleSearch = (query: string) => {
    updateQueryParams({ searchTerm: query });
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
    });
  };

  return (
    <div>
      <Container>
        <div className="my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.4171553169313!2d-0.24466420000000003!3d51.615567199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616dc63b10f11%3A0xcac3328ce14a0654!2sq%2C%20Athene%20House%2C%2086%20The%20Broadway%2C%20London%20NW7%203TD%2C%20UK!5e0!3m2!1sen!2sbd!4v1761889818073!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full h-[300px] sm:h-[400px] md:h-[500px]"
          ></iframe>
        </div>

        <div className="relative w-full mb-8">
          <SearchFilter
            onSearch={handleSearch}
            onFilter={handleFilter}
            onReset={handleResetFilters}
            initialCategories={categories}
            placeholder="Search Location/Job"
            className="max-w-full mx-auto"
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
                  position={job.title}
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
