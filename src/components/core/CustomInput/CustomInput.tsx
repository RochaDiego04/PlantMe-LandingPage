import { ReactNode } from "react";
import Button from "../Button/Button";
import { ButtonMode } from "../../../enums/ButtonMode";

type CustomInputProps = {
  className?: string;
  buttonClassName?: string;
  inputType?: string;
  Icon?: ReactNode;
  buttonText?: string;
  buttonMode?: ButtonMode;
  placeholder?: string;
  [key: string]: unknown;
};

export default function CustomInput({
  className,
  buttonClassName,
  inputType,
  Icon,
  buttonText,
  buttonMode,
  placeholder,
  ...props
}: CustomInputProps) {
  return (
    <div
      className={`flex bg-white dark:bg-grey4 items-center justify-center border border-[#3a6150] text-sm pl-4 ${
        className ? className : ""
      }`}
    >
      <input
        type={inputType ? inputType : "text"}
        placeholder={placeholder ?? "Search"}
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
  );
}
