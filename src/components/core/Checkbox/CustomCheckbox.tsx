import { useState } from "react";
import "./CustomCheckbox.css";

type CheckboxProps = {
  label?: string;
  mode: "primary";
};

export default function Checkbox({ label, mode }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const nextChecked = !isChecked;
    setIsChecked(nextChecked);
  };

  return (
    <div className={`checkbox__wrapper ${mode}`}>
      <label className="flex items-center gap-5">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <svg
          className={`checkbox checkbox--${mode} ${
            isChecked ? `checkbox__${mode}--active` : ""
          }`}
          aria-hidden="true"
          viewBox="-2 0 14 7"
          fill="none"
        >
          <path
            d="M1 3L3.5 5.5L9 1"
            strokeWidth="2"
            stroke={isChecked ? "#fff" : "none"}
          />
        </svg>
        <span className=" capitalize">{label}</span>
      </label>
    </div>
  );
}
