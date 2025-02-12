import ContactCard from "../../core/ContactCard/ContactCard";
import ContactForm from "../../core/ContactForm/ContactForm";
import "./FormSection.css";

export default function FormSection() {
  return (
    <footer className="formSection__container py-20 px-16 bg-[#71837B]">
      <div className="formSection__innerContainer bg-white flex rounded-xl">
        <ContactCard />
        <ContactForm />
      </div>
    </footer>
  );
}
