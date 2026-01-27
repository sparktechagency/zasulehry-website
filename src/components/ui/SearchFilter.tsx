"use client";

import { useState, useRef, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";
import { gradientClasses } from "@/styles/gradients";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import FilterModal from "./search-filter/FilterModal";
import { FilterData } from "./search-filter/types";

// Define libraries outside of component to avoid re-render issues
const libraries: "places"[] = ["places"];

type SearchFilterProps = {
  onSearch?: (query: string) => void;
  onFilter?: (filterData: FilterData) => void;
  onReset?: () => void;
  onLocationSelect?: (location: {
    lat: number;
    lng: number;
    placeName: string;
  }) => void;
  initialCategories?: any[];
  initialSearchValue?: string;
  placeholder?: string;
  className?: string;
};

// Re-export FilterData for consumers
export type { FilterData };

const SearchFilter = ({
  onSearch,
  onFilter,
  onReset,
  onLocationSelect,
  initialCategories = [],
  initialSearchValue = "",
  placeholder = "Search Location/Job",
  className = "",
}: SearchFilterProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [searchQuery, setSearchQuery] = useState(initialSearchValue);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const onAutocompleteLoad = useCallback(
    (autocomplete: google.maps.places.Autocomplete) => {
      autocompleteRef.current = autocomplete;
    },
    [],
  );

  const onPlaceChanged = useCallback(() => {
    if (autocompleteRef.current && onLocationSelect) {
      const place = autocompleteRef.current.getPlace();

      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const placeName = place.formatted_address || place.name || "";

        setSearchQuery(placeName);
        onLocationSelect({ lat, lng, placeName });
      }
    }
  }, [onLocationSelect]);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="md:w-[95%] w-[85%]">
        {isLoaded ? (
          <Autocomplete
            onLoad={onAutocompleteLoad}
            onPlaceChanged={onPlaceChanged}
            options={{
              types: ["(cities)"],
            }}
          >
            <input
              type="text"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-lg bg-linear-to-b from-white/10 to-white/5 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-teal-500 transition-colors"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </Autocomplete>
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 px-4 pr-12 rounded-lg bg-linear-to-b from-white/10 to-white/5 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-teal-500 transition-colors"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        )}
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
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onConfirm={(data) => {
          if (onFilter) onFilter(data);
        }}
        onReset={onReset}
        initialCategories={initialCategories}
      />
    </div>
  );
};

export default SearchFilter;
