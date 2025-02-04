import ContactCard from "../../core/ContactCard/ContactCard";
import ContactForm from "../../core/ContactForm/ContactForm";

export default function FormSection() {
  return (
    <section className="py-20 px-16 bg-[#71837B]">
      <div className="bg-white flex rounded-xl">
        <ContactCard />
        <ContactForm />
      </div>
    </section>
  );
}
