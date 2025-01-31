import CustomCard from "../../core/CustomCard/CustomCard";
import cardImage from "../../../assets/cardImage.jpg";

export default function AboutSection() {
  return (
    <section className="flex gap-5 py-20 px-16">
      <CustomCard
        title={"About Us"}
        linkName={"Learn more about →"}
        link={"#"}
        img={cardImage}
      >
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus
          cursus.
        </p>
      </CustomCard>
      <CustomCard
        title={"About Us 2"}
        linkName={"Learn more about →"}
        link={"#"}
        img={cardImage}
      >
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus
          cursus.
        </p>
      </CustomCard>
    </section>
  );
}
