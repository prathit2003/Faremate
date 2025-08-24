import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SelectProps {
  options: string[];
  first: string;
}

const Select = ({ options, first }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(first);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Main button */}
      <div
        className="card rounded-md md:rounded-xl w-fit px-1.5 py-1 md:px-4 md:py-2 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary">
          {selected}
        </span>
        <KeyboardArrowDownIcon
          className={`text-secondary ml-2 md:ml-3 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 25 } }}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-1 w-full card rounded-md md:rounded-xl z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-3 py-1.5 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:bg-gray-100 ${
                option === selected ? "bg-gray-50 font-medium" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
