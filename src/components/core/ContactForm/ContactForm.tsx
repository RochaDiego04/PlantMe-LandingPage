import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import RadioGroup from "../RadioGroup/RadioGroup";
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import CheckboxGroup from "../Checkbox/CheckboxGroup";
import Button from "../Button/Button";
import { ButtonMode } from "../../../enums/ButtonMode";
import "./ContactForm.css";

const specializationOptions = [
  { value: "ui", label: "UI Developer" },
  { value: "uiDesginer", label: "UI/UX Designer" },
  { value: "accessibility", label: "Accessibility Expert" },
  { value: "qa", label: "QA Engineer" },
  { value: "other", label: "Other" },
];

const checkboxOptions = [
  {
    labels: ["Accept the Terms", "Accept the Terms 2"],
    mode: "primary",
  },
];

export default function ContactForm() {
  const [radioValue, setRadioValue] = useState("");
  return (
    <form className="w-full pt-12 pl-5 pr-7">
      <div className=" flex flex-col gap-4.5 mb-6.5 sm:flex-row">
        <CustomInput
          placeholder="John"
          label="First Name"
          name="firstName"
          labelFor="first-name"
          ariaLabel="First Name"
          required={true}
          className="flex-1"
        />
        <CustomInput
          placeholder="Doe"
          label="Last Name"
          name="lastName"
          labelFor="last-name"
          ariaLabel="Last Name"
          required={true}
          className="flex-1"
        />
      </div>
      <div className=" flex flex-col gap-4.5 mb-6.5 sm:flex-row">
        <CustomInput
          placeholder="Email"
          inputType="email"
          label="Email"
          name="email"
          labelFor="email"
          ariaLabel="Email"
          required={true}
          className="flex-1"
        />
        <CustomInput
          placeholder="00 000 00 00"
          inputType="number"
          label="Phone Number"
          name="phoneNumber"
          labelFor="phone-number"
          ariaLabel="Phone Number"
          required={true}
          className="flex-1"
        />
      </div>
      <RadioGroup
        className="flex flex-col gap-2 flex-wrap sm:flex-row sm:gap-7"
        name={"Specialization Area"}
        options={specializationOptions}
        selectedValue={radioValue}
        onChange={(e) => {
          setRadioValue(e);
          console.log(e);
        }}
      ></RadioGroup>
      <div className=" flex gap-4.5 mb-6.5">
        <CustomTextArea
          placeholder="Text here..."
          label="Message"
          labelFor="message"
          name="message"
          ariaLabel="Message text area"
          required={true}
          className="flex-1"
          rows={5}
        />
      </div>
      {checkboxOptions.map((checkboxOption, index) => (
        <CheckboxGroup
          key={index}
          labels={checkboxOption.labels}
          mode={"primary"}
          className="mb-8"
        ></CheckboxGroup>
      ))}

      <div className="flex justify-end">
        <Button className="px-10 py-2.5 mb-4" mode={ButtonMode.Primary}>
          Send Message
        </Button>
      </div>
    </form>
  );
}
