import { ButtonMode } from "../../../enums/ButtonMode";
import CustomInput from "../../core/CustomInput/CustomInput";
import mastercard from "../../../assets/payment_mastercard.jpg";
import visa from "../../../assets/payment_visa.jpg";
import "./FooterSection.css";

export default function FooterSection() {
  return (
    <footer className="pt-6">
      <div className="footer__topSection flex">
        <div className="pl-12 pr-16">
          <h2 className="pl-4 text-black font-extrabold text-4xl leading-14 mb-2.5">
            PlantMe
          </h2>
          <p className="pl-4 text-sm leading-5 mb-14 ">
            Subscribe and be the first to know about our news and promotions.
          </p>
          <CustomInput
            className="w-full mb-6 "
            containerClassname="border-none pl-0 no-outline"
            inputClassname="border-b-1 focus:border-b-2"
            buttonText="Suscribe"
            buttonMode={ButtonMode.Primary}
            buttonClassName="py-3 px-12 ml-2 mt-[-10px]"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="footer__otherPages">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <p>Contacts</p>
          <ul className="mb-11.5">
            <li>
              <a href="#" className="text-sm text-[#00000099]">
                +38 063 072 0121
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#00000099]">
                plantme.store@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex gap-9 items-center">
            <img
              src={visa}
              className="w-12 h-7"
              alt="Payment method image: visa"
            />
            <img
              src={mastercard}
              className="w-12 h-10"
              alt="Payment method image: mastercard"
            />
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <span>@2022 PlantMe. All Rights Reserved</span>
        <ul className="footer__copyright__links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Language</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
