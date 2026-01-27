import { FaChevronDown } from "react-icons/fa";

interface FilterDropdownProps {
  label: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
  selectedOption: string;
}

const FilterDropdown = ({
  label,
  options,
  isOpen,
  onToggle,
  onSelect,
  selectedOption,
}: FilterDropdownProps) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <button
          className="w-full cursor-pointer flex items-center justify-between text-white bg-white/5 border border-white/20 rounded-lg p-4"
          onClick={onToggle}
        >
          <span>{selectedOption || label}</span>
          <FaChevronDown className="text-white/70" />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-[#2C3E50] border border-white/20 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-3 text-white hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-b-0 ${
                  selectedOption === option ? "bg-teal-600" : ""
                }`}
                onClick={() => onSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
