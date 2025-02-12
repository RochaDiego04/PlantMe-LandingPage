import Checkbox from "./CustomCheckbox";

type CheckboxGroupProps = {
  labels: Array<string | JSX.Element>;
  mode: "primary";
  className?: string;
};

export default function CheckboxGroup({
  labels,
  mode,
  className,
}: CheckboxGroupProps) {
  return (
    <div className={`${className ? className : ""}`}>
      <div className="flex flex-wrap gap-12">
        {labels.map((label, index) => (
          <Checkbox
            key={index}
            label={typeof label === "string" ? label : undefined}
            mode={mode}
          ></Checkbox>
        ))}
      </div>
    </div>
  );
}
