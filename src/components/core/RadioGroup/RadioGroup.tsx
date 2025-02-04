import React from "react";
import "./RadioGroup.css";

type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  className: string;
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className={`form__group ${className}`}>
      {options.map((option) => (
        <div className="form__radio-group" key={option.value}>
          <input
            type="radio"
            className="form__radio-input"
            id={option.value}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          <label htmlFor={option.value} className="form__radio-label">
            <span className="form__radio-button"></span>
            <span>{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
