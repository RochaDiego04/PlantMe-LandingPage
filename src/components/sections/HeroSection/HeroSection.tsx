import { ButtonMode } from "../../../enums/ButtonMode";
import Button from "../../core/Button/Button";
import image from "../../../assets/Heroimage.png";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <main className="bg-[#f8f8f8] heroSection__container gap-4 pt-6 px-16 pb-12">
      <div className="heroSection__leftSide">
        <h1 className="mb-9 text-[#3a6150] text-[3rem]">
          Lorem ipsum dolor sit amet
        </h1>
        <div className="mb-9">
          <h2 className="mb-3 text-[#3a6150] text-[1.5rem]">
            Lorem ipsum dolor sit amet
          </h2>
          <p className=" max-w-[570px] text-[#111111]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
            tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
            hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis,
            ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div>
          <Button
            className="py-2 px-14"
            mode={ButtonMode.Primary}
            onClick={() => console.log("clicked")}
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className="heroSection__rightSide">
        <img src={image} alt="hero section plants image" />
      </div>
    </main>
  );
}
