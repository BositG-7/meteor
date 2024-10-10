import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({
  label,
  options,
  setValues,
  oldStepValue = "default",
}: {
  label: any;
  options: any;
  setValues: any;
  oldStepValue?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative text-center w-64">
      <div>
        <button
          disabled={!oldStepValue}
          type="button"
          className="flex rounded-md xl:rounded-xl justify-center items-center text-sm xl:text-xl text-center px-2 xl:px-16 py-2 xl:py-4 bg-lightgray font-semibold text-gray w-full"
          onClick={toggleDropdown}
        >
          {selectedOption || label}
          <div className="absolute right-2 xl:right-5">
            <IoIosArrowDown />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option: any, index: any) => (
              <button
                key={index}
                className="block px-6 py-3 text-sm xl:text-xl font-semibold hover:bg-lightgray w-full text-center"
                onClick={() => {
                  handleOptionClick(option);
                  setValues(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
