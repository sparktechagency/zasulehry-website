import { useState, useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import { LuLoader } from "react-icons/lu";
import { gradientClasses } from "@/styles/gradients";
import { FilterData } from "./types";
import FilterDropdown from "./FilterDropdown";
import FilterSlider from "./FilterSlider";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: FilterData) => void;
  onReset?: () => void;
  initialCategories: any[];
  isLoading?: boolean;
}

const FilterModal = ({
  isOpen,
  onClose,
  onConfirm,
  onReset,
  initialCategories,
  isLoading,
}: FilterModalProps) => {
  const [salaryType, setSalaryType] = useState<"Hour" | "Month" | "Year">(
    "Month",
  );
  const [salaryValue, setSalaryValue] = useState(5000);
  const [distanceValue, setDistanceValue] = useState(5);

  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Selected values
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedSubCategory, setSelectedSubCategory] =
    useState("Sub Category");
  const [selectedFullTime, setSelectedFullTime] = useState("Full Time");
  const [selectedExperience, setSelectedExperience] =
    useState("With Experience");

  const [touchedFields, setTouchedFields] = useState<Set<keyof FilterData>>(
    new Set(),
  );

  const markFieldAsTouched = (field: keyof FilterData) => {
    setTouchedFields((prev) => new Set(prev).add(field));
  };

  // Dynamic Options derived from initialCategories
  const categoryOptions = initialCategories.map((cat) => cat.name);
  const subCategoryOptions = useMemo(() => {
    const category = initialCategories.find(
      (cat) => cat.name === selectedCategory,
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

  const handleConfirm = () => {
    const data: FilterData = {};
    if (touchedFields.has("category")) data.category = selectedCategory;
    if (touchedFields.has("subCategory"))
      data.subCategory = selectedSubCategory;
    if (touchedFields.has("employmentType"))
      data.employmentType = selectedFullTime;
    if (touchedFields.has("experience")) data.experience = selectedExperience;
    if (touchedFields.has("salaryType")) data.salaryType = salaryType;
    if (touchedFields.has("salaryValue")) data.salaryValue = salaryValue;
    if (touchedFields.has("distanceValue")) data.distanceValue = distanceValue;

    onConfirm(data);
    onClose();
  };

  const handleReset = () => {
    setSelectedCategory("Category");
    setSelectedSubCategory("Sub Category");
    setSelectedFullTime("Full Time");
    setSelectedExperience("With Experience");
    setSalaryType("Month");
    setSalaryValue(5000);
    setDistanceValue(5);
    setTouchedFields(new Set());
    if (onReset) {
      onReset();
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1E293B]/80 backdrop-blur-md p-6 rounded-xl w-full max-w-md mx-4 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-xl font-medium">Filter</h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Category Dropdown */}
        <FilterDropdown
          label="Category"
          options={categoryOptions}
          selectedOption={selectedCategory}
          isOpen={activeDropdown === "category"}
          onToggle={() =>
            setActiveDropdown(activeDropdown === "category" ? null : "category")
          }
          onSelect={(option) => {
            setSelectedCategory(option);
            setSelectedSubCategory("Sub Category"); // Reset subcategory
            markFieldAsTouched("category");
            setTouchedFields((prev) => {
              const next = new Set(prev);
              next.delete("subCategory");
              return next;
            });
            setActiveDropdown(null);
          }}
        />

        {/* Sub Category Dropdown */}
        <FilterDropdown
          label="Sub Category"
          options={subCategoryOptions}
          selectedOption={selectedSubCategory}
          isOpen={activeDropdown === "subCategory"}
          onToggle={() =>
            setActiveDropdown(
              activeDropdown === "subCategory" ? null : "subCategory",
            )
          }
          onSelect={(option) => {
            setSelectedSubCategory(option);
            markFieldAsTouched("subCategory");
            setActiveDropdown(null);
          }}
        />

        {/* Full Time Dropdown */}
        <FilterDropdown
          label="Full Time"
          options={fullTimeOptions}
          selectedOption={selectedFullTime}
          isOpen={activeDropdown === "fullTime"}
          onToggle={() =>
            setActiveDropdown(activeDropdown === "fullTime" ? null : "fullTime")
          }
          onSelect={(option) => {
            setSelectedFullTime(option);
            markFieldAsTouched("employmentType");
            setActiveDropdown(null);
          }}
        />

        {/* Experience Dropdown */}
        <FilterDropdown
          label="With Experience"
          options={experienceOptions}
          selectedOption={selectedExperience}
          isOpen={activeDropdown === "experience"}
          onToggle={() =>
            setActiveDropdown(
              activeDropdown === "experience" ? null : "experience",
            )
          }
          onSelect={(option) => {
            setSelectedExperience(option);
            markFieldAsTouched("experience");
            setActiveDropdown(null);
          }}
        />

        {/* Salary Section */}
        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-white text-base">Salary</span>
            <div className="flex ml-auto bg-[#2C3E50]/50 rounded-md p-0.5">
              {(["Hour", "Month", "Year"] as const).map((type) => (
                <button
                  key={type}
                  className={`px-4 py-1 rounded-md cursor-pointer text-sm ${
                    salaryType === type
                      ? `${gradientClasses.primaryBg} text-white`
                      : "text-white/80"
                  }`}
                  onClick={() => {
                    setSalaryType(type);
                    markFieldAsTouched("salaryType");

                    // Set halfway value based on new type
                    let mid = 5000;
                    if (type === "Hour") {
                      mid = 50;
                    } else if (type === "Year") {
                      mid = 100000;
                    }

                    setSalaryValue(mid);
                  }}
                >
                  {type === "Month"
                    ? "Monthly"
                    : type === "Year"
                      ? "Yearly"
                      : "Hourly"}
                </button>
              ))}
            </div>
          </div>

          {(() => {
            let min = 1;
            let max = 10000;
            if (salaryType === "Hour") {
              min = 1;
              max = 100;
            } else if (salaryType === "Year") {
              min = 1000;
              max = 200000;
            }

            return (
              <FilterSlider
                label=""
                value={salaryValue}
                min={min}
                max={max}
                onChange={(val) => {
                  setSalaryValue(val);
                  markFieldAsTouched("salaryValue");
                }}
                valueLabel={`€${salaryValue.toLocaleString()}`}
                leftLabel={`€${min.toLocaleString()}`}
                rightLabel={`€${max.toLocaleString()}`}
              />
            );
          })()}
        </div>

        {/* Distance Section */}
        <FilterSlider
          label="Distance"
          value={distanceValue}
          min={1}
          max={500}
          onChange={(val) => {
            setDistanceValue(val);
            markFieldAsTouched("distanceValue");
          }}
          valueLabel={`${distanceValue} km`}
          leftLabel="1 km"
          rightLabel="500 km"
        />

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleReset}
            disabled={isLoading}
            className="flex-1 py-3 rounded-lg text-white font-medium border border-white/20 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            style={{
              boxShadow: "0 0 10px 0 #B1F1FF inset",
            }}
            className={`${gradientClasses.primaryBg} flex-1 py-3 rounded-lg text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2`}
          >
            {isLoading ? (
              <>
                <LuLoader className="animate-spin" size={20} />
                Loading...
              </>
            ) : (
              "Confirm"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
