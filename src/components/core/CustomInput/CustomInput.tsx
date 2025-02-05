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
  onButtonClick?: () => void;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  containerClassname?: string;
  inputClassname?: string;
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
  onButtonClick,
  ariaLabel,
  ariaDescribedBy,
  containerClassname,
  inputClassname,
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
        className={`customInput flex bg-white dark:bg-grey4 items-center justify-center border-2 border-black text-sm pl-4 ${containerClassname}`}
      >
        <input
          type={inputType ? inputType : "text"}
          id={labelFor}
          name={name}
          placeholder={placeholder ?? "Search"}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          className={`w-full focus:outline-none bg-transparent text-[#3a6150] placeholder:text-[rgba(58,97,80,0.70)] mr-auto min-h-[2.0rem] ${inputClassname}`}
          {...props}
        />
        {buttonMode ? (
          <Button
            role="button"
            href="#"
            className={`text-center ${buttonClassName ? buttonClassName : ""}`}
            mode={buttonMode}
            onClick={onButtonClick}
            Icon={Icon}
          >
            {buttonText}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
