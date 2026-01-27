interface FilterSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  valueLabel: string;
  leftLabel: string;
  rightLabel: string;
}

const FilterSlider = ({
  label,
  value,
  min,
  max,
  onChange,
  valueLabel,
  leftLabel,
  rightLabel,
}: FilterSliderProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <span className="text-white text-base">{label}</span>
      </div>

      <div className="mt-4">
        <div className="relative pt-6">
          <div className="absolute top-0 left-0 text-teal-500 font-semibold">
            {valueLabel}
          </div>
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            style={{
              background: `linear-gradient(to right, #0D9488 0%, #0D9488 ${
                ((value - min) * 100) / (max - min)
              }%, #374151 ${
                ((value - min) * 100) / (max - min)
              }%, #374151 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>{leftLabel}</span>
            <span>{rightLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSlider;
