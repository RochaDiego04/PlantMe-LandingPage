import { ReactNode } from "react";
import Button from "../Button/Button";
import { ButtonMode } from "../../../enums/ButtonMode";
import "./CustomInput.css";

type CustomInputProps = {
  className?: string;
  label?: string;
  labelFor?: string;
  name?: string;
  buttonClassName?: string;
  inputType?: string;
  Icon?: ReactNode;
  buttonText?: string;
  buttonMode?: ButtonMode;
  placeholder?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;

  [key: string]: unknown;
};

export default function CustomInput({
  className,
  label,
  labelFor,
  name,
  buttonClassName,
  inputType,
  Icon,
  buttonText,
  buttonMode,
  placeholder,
  ariaLabel,
  ariaDescribedBy,
  ...props
}: CustomInputProps) {
  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      {label && (
        <label className="text-[14px] mb-1" htmlFor={labelFor}>
          {label}
        </label>
      )}
      <div
        className={`customInput flex bg-white dark:bg-grey4 items-center justify-center border-2 border-[#3a6150] text-sm pl-4`}
      >
        <input
          type={inputType ? inputType : "text"}
          id={labelFor}
          name={name}
          placeholder={placeholder ?? "Search"}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          className="w-full focus:border-none focus:outline-none bg-transparent text-[#3a6150] placeholder:text-[rgba(58,97,80,0.70)] mr-auto min-h-[2.0rem]"
          {...props}
        />
        {buttonMode ? (
          <Button
            href="#"
            className={`text-center ${buttonClassName ? buttonClassName : ""}`}
            mode={buttonMode}
            buttonType="anchor"
            Icon={Icon}
          >
            {buttonText}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
