import "./CustomTextArea.css";

type CustomTextAreaProps = {
  className?: string;
  label?: string;
  labelFor?: string;
  name?: string;
  placeholder?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  rows: number;
  [key: string]: unknown;
};

export default function CustomTextArea({
  className,
  label,
  labelFor,
  name,
  placeholder,
  ariaLabel,
  ariaDescribedBy,
  rows = 4,
  ...props
}: CustomTextAreaProps) {
  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      {label && (
        <label className="text-[14px] mb-1" htmlFor={labelFor}>
          {label}
        </label>
      )}
      <div className="customTextArea flex bg-white dark:bg-grey4 border-2 border-[#3a6150] text-sm p-2">
        <textarea
          id={labelFor}
          name={name}
          placeholder={placeholder ?? "Enter text..."}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          rows={rows}
          className="w-full focus:border-none focus:outline-none bg-transparent text-[#3a6150] placeholder:text-[rgba(58,97,80,0.70)] min-h-[4rem] resize-none"
          {...props}
        />
      </div>
    </div>
  );
}
