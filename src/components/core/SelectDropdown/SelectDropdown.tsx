import { ChevronDown } from "lucide-react";
import "./SelectDropdown.css";
import { useSelectDropdown } from "./hooks/useSelectDropdown";

type SelectDropdownProps = {
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
  options: Array<string>;
};

export default function SelectDropdown({
  value,
  onChange,
  placeholder,
  options,
}: SelectDropdownProps) {
  const { open, setOpen, focusedIndex, dropdownRef, handleKeyDown } =
    useSelectDropdown(options, value, onChange);

  const optionIds = options.map((_, index) => `select-option-${index}`);

  return (
    <div className="relative max-w-[320px]" ref={dropdownRef}>
      <div
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className="placeholderContainer w-full flex items-center justify-between gap-2 px-3 rounded-lg cursor-pointer"
      >
        <p className={`${value ? "text-black" : "text-grey3"} capitalize`}>
          {value || placeholder}
        </p>
        <ChevronDown
          className={`stroke-1 text-black transition-all ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {open && (
        <div
          className="absolute top-[105%] left-0 w-full max-h-[320px] py-2 border-1 border-grey2 rounded-lg bg-white"
          role="listbox"
          aria-activedescendant={
            focusedIndex >= 0 ? optionIds[focusedIndex] : undefined
          }
        >
          {options.map((option, index) => (
            <div
              key={option}
              id={optionIds[index]}
              role="option"
              aria-selected={option === value}
              tabIndex={0}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onChange(option);
                  setOpen(false);
                }
              }}
              className={`flex py-2 px-3 cursor-pointer ${
                focusedIndex === index
                  ? "bg-gray-300"
                  : option === value
                  ? "bg-gray-200"
                  : "bg-white"
              } hover:bg-gray-200 rounded-sm`}
            >
              <p className="capitalize text-black">{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
