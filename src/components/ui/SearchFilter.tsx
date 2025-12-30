"use client";

import { useState, useMemo } from "react";
import { FaSearch, FaTimes, FaChevronDown } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";
import { gradientClasses } from "@/styles/gradients";

type SearchFilterProps = {
  onSearch?: (query: string) => void;
  onFilter?: (filterData: FilterData) => void;
  onReset?: () => void;
  initialCategories?: any[];
  placeholder?: string;
  className?: string;
};

export type FilterData = {
  category?: string;
  subCategory?: string;
  employmentType?: string;
  experience?: string;
  salaryType?: "Day" | "Month" | "Year";
  salaryValue?: number;
  distanceValue?: number;
};

const SearchFilter = ({
  onSearch,
  onFilter,
  onReset,
  initialCategories = [],
  placeholder = "Search Location/Job",
  className = "",
}: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [salaryType, setSalaryType] = useState<"Day" | "Month" | "Year">(
    "Month"
  );
  const [salaryValue, setSalaryValue] = useState(30);
  const [distanceValue, setDistanceValue] = useState(5);

  // Dropdown states
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
  const [showFullTimeDropdown, setShowFullTimeDropdown] = useState(false);
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);

  // Selected values
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedSubCategory, setSelectedSubCategory] =
    useState("Sub Category");
  const [selectedFullTime, setSelectedFullTime] = useState("Full Time");
  const [selectedExperience, setSelectedExperience] =
    useState("With Experience");

  const [touchedFields, setTouchedFields] = useState<Set<keyof FilterData>>(
    new Set()
  );

  const markFieldAsTouched = (field: keyof FilterData) => {
    setTouchedFields((prev) => new Set(prev).add(field));
  };

  // Dynamic Options derived from initialCategories
  const categoryOptions = initialCategories.map((cat) => cat.name);
  const subCategoryOptions = useMemo(() => {
    const category = initialCategories.find(
      (cat) => cat.name === selectedCategory
    );
    return category ? category.subCategories : [];
  }, [selectedCategory, initialCategories]);

  const fullTimeOptions = [
    "Full Time",
    "Part Time",
    "Mini Job",
    "Ausbildung",
    "Temporary Work",
    "Career Changer",
  ];

  const experienceOptions = ["With Experience", "Without Experience"];

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const closeFilterModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowFilterModal(false);
      // Close all dropdowns when modal is closed
      setShowCategoryDropdown(false);
      setShowSubCategoryDropdown(false);
      setShowFullTimeDropdown(false);
      setShowExperienceDropdown(false);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleConfirmFilter = () => {
    if (onFilter) {
      const data: FilterData = {};
      if (touchedFields.has("category")) data.category = selectedCategory;
      if (touchedFields.has("subCategory"))
        data.subCategory = selectedSubCategory;
      if (touchedFields.has("employmentType"))
        data.employmentType = selectedFullTime;
      if (touchedFields.has("experience")) data.experience = selectedExperience;
      if (touchedFields.has("salaryType")) data.salaryType = salaryType;
      if (touchedFields.has("salaryValue")) data.salaryValue = salaryValue;
      if (touchedFields.has("distanceValue"))
        data.distanceValue = distanceValue;

      onFilter(data);
    }
    setShowFilterModal(false);
  };

  const handleReset = () => {
    setSelectedCategory("Category");
    setSelectedSubCategory("Sub Category");
    setSelectedFullTime("Full Time");
    setSelectedExperience("With Experience");
    setSalaryType("Month");
    setSalaryValue(30);
    setDistanceValue(5);
    setTouchedFields(new Set());
    if (onReset) {
      onReset();
    }
    setShowFilterModal(false);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="md:w-[95%] w-[85%]">
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-3 px-4 pr-12 rounded-lg bg-linear-to-b from-white/10 to-white/5 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-teal-500 transition-colors"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="absolute md:right-20 right-17 top-1/2 -translate-y-1/2 text-teal-500 hover:text-teal-400 transition-colors"
          aria-label="Search"
          onClick={handleSearch}
        >
          <FaSearch size={18} />
        </button>
      </div>

      {/* Filter button */}
      <button
        style={{
          boxShadow: "0 0 10px 0 #B1F1FF inset",
        }}
        className={`${gradientClasses.primaryBg} p-4 cursor-pointer rounded-full absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-teal-400 transition-colors`}
        aria-label="Filter"
        onClick={toggleFilterModal}
      >
        <LuSlidersHorizontal size={18} />
      </button>

      {/* Filter Modal */}
      {showFilterModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={closeFilterModal}
        >
          <div
            className="relative bg-[#1E293B]/80 backdrop-blur-md p-6 rounded-xl w-full max-w-md mx-4 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-medium">Filter</h3>
              <button
                onClick={toggleFilterModal}
                className="text-white/70 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="mb-4">
              <div className="relative">
                <button
                  className="w-full cursor-pointer flex items-center justify-between text-white bg-white/5 border border-white/20 rounded-lg p-4"
                  onClick={() => {
                    setShowCategoryDropdown(!showCategoryDropdown);
                    setShowFullTimeDropdown(false);
                    setShowExperienceDropdown(false);
                  }}
                >
                  <span>{selectedCategory}</span>
                  <FaChevronDown className="text-white/70" />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-[#2C3E50] border border-white/20 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {categoryOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`p-3 text-white hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-b-0 ${
                          selectedCategory === option ? "bg-teal-600" : ""
                        }`}
                        onClick={() => {
                          setSelectedCategory(option);
                          setSelectedSubCategory("Sub Category"); // Reset subcategory
                          markFieldAsTouched("category");
                          setTouchedFields((prev) => {
                            const next = new Set(prev);
                            next.delete("subCategory");
                            return next;
                          });
                          setShowCategoryDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sub Category Dropdown */}
            <div className="mb-4">
              <div className="relative">
                <button
                  className="w-full cursor-pointer flex items-center justify-between text-white bg-white/5 border border-white/20 rounded-lg p-4"
                  onClick={() => {
                    setShowSubCategoryDropdown(!showSubCategoryDropdown);
                    setShowCategoryDropdown(false);
                    setShowFullTimeDropdown(false);
                    setShowExperienceDropdown(false);
                  }}
                >
                  <span>{selectedSubCategory}</span>
                  <FaChevronDown className="text-white/70" />
                </button>

                {showSubCategoryDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-[#2C3E50] border border-white/20 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {subCategoryOptions.map((option: string, index: number) => (
                      <div
                        key={index}
                        className={`p-3 text-white hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-b-0 ${
                          selectedSubCategory === option ? "bg-teal-600" : ""
                        }`}
                        onClick={() => {
                          setSelectedSubCategory(option);
                          markFieldAsTouched("subCategory");
                          setShowSubCategoryDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Full Time Dropdown */}
            <div className="mb-4">
              <div className="relative">
                <button
                  className="w-full cursor-pointer flex items-center justify-between text-white bg-white/5 border border-white/20 rounded-lg p-4"
                  onClick={() => {
                    setShowFullTimeDropdown(!showFullTimeDropdown);
                    setShowCategoryDropdown(false);
                    setShowSubCategoryDropdown(false);
                    setShowExperienceDropdown(false);
                  }}
                >
                  <span>{selectedFullTime}</span>
                  <FaChevronDown className="text-white/70" />
                </button>

                {showFullTimeDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-[#2C3E50] border border-white/20 rounded-lg shadow-lg">
                    {fullTimeOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`p-3 text-white hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-b-0 ${
                          selectedFullTime === option ? "bg-teal-600" : ""
                        }`}
                        onClick={() => {
                          setSelectedFullTime(option);
                          markFieldAsTouched("employmentType");
                          setShowFullTimeDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* With Experience Dropdown */}
            <div className="mb-4">
              <div className="relative">
                <button
                  className="w-full cursor-pointer flex items-center justify-between text-white bg-white/5 border border-white/20 rounded-lg p-4"
                  onClick={() => {
                    setShowExperienceDropdown(!showExperienceDropdown);
                    setShowCategoryDropdown(false);
                    setShowSubCategoryDropdown(false);
                    setShowFullTimeDropdown(false);
                  }}
                >
                  <span>{selectedExperience}</span>
                  <FaChevronDown className="text-white/70" />
                </button>

                {showExperienceDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-[#2C3E50] border border-white/20 rounded-lg shadow-lg">
                    {experienceOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`p-3 text-white hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-b-0 ${
                          selectedExperience === option ? "bg-teal-600" : ""
                        }`}
                        onClick={() => {
                          setSelectedExperience(option);
                          markFieldAsTouched("experience");
                          setShowExperienceDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Salary Section */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-white text-base">Salary</span>
                <div className="flex ml-auto bg-[#2C3E50]/50 rounded-md p-0.5">
                  <button
                    className={`px-4 py-1 rounded-md cursor-pointer text-sm ${
                      salaryType === "Day"
                        ? `${gradientClasses.primaryBg} text-white`
                        : "text-white/80"
                    }`}
                    onClick={() => {
                      setSalaryType("Day");
                      markFieldAsTouched("salaryType");
                    }}
                  >
                    Day
                  </button>
                  <button
                    className={`px-4 py-1 rounded-md cursor-pointer text-sm ${
                      salaryType === "Month"
                        ? `${gradientClasses.primaryBg} text-white`
                        : "text-white/80"
                    }`}
                    onClick={() => {
                      setSalaryType("Month");
                      markFieldAsTouched("salaryType");
                    }}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-4 py-1 rounded-md cursor-pointer text-sm ${
                      salaryType === "Year"
                        ? `${gradientClasses.primaryBg} text-white`
                        : "text-white/80"
                    }`}
                    onClick={() => {
                      setSalaryType("Year");
                      markFieldAsTouched("salaryType");
                    }}
                  >
                    Yearly
                  </button>
                </div>
              </div>

              {/* Salary Slider */}
              <div className="mt-4">
                <div className="relative pt-6">
                  <div className="absolute top-0 left-0 text-teal-500 font-semibold">
                    ${salaryValue.toLocaleString()}
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100000"
                    value={salaryValue}
                    onChange={(e) => {
                      setSalaryValue(parseInt(e.target.value));
                      markFieldAsTouched("salaryValue");
                    }}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    style={{
                      background: `linear-gradient(to right, #0D9488 0%, #0D9488 ${
                        ((salaryValue - 10) * 100) / 99990
                      }%, #374151 ${
                        ((salaryValue - 10) * 100) / 99990
                      }%, #374151 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>$10</span>
                    <span>$100,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Distance Section */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-white text-base">Distance</span>
              </div>

              {/* Distance Slider */}
              <div className="mt-4">
                <div className="relative pt-6">
                  <div className="absolute top-0 left-0 text-teal-500 font-semibold">
                    {distanceValue} km
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={distanceValue}
                    onChange={(e) => {
                      setDistanceValue(parseInt(e.target.value));
                      markFieldAsTouched("distanceValue");
                    }}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    style={{
                      background: `linear-gradient(to right, #0D9488 0%, #0D9488 ${
                        ((distanceValue - 1) * 100) / 99
                      }%, #374151 ${
                        ((distanceValue - 1) * 100) / 99
                      }%, #374151 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>1 km</span>
                    <span>100 km</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-lg text-white font-medium border border-white/20 hover:bg-white/5 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={handleConfirmFilter}
                style={{
                  boxShadow: "0 0 10px 0 #B1F1FF inset",
                }}
                className={`${gradientClasses.primaryBg} flex-1 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
