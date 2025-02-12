import { ButtonMode } from "../../../enums/ButtonMode";
import Button from "../Button/Button";
import "./ContactCard.css";
import Socials from "../../../assets/Socials.svg";

export default function ContactCard() {
  return (
    <div className="contactCard__container h-[660px] max-w-[440px] rounded-xl p-10 pb-11 flex flex-col justify-between">
      <div className="contactCard__top">
        <h2 className="text-black font-extrabold text-4xl leading-14 mb-2.5">
          Contact Us
        </h2>
        <p className="contactCard__top--info text-sm leading-5 mb-14">
          Fill up the form and ur Team will get back to you within 24 hours.
          Happy to see your message!
        </p>
        <ul className="flex flex-col gap-1.5 mb-2">
          <li>
            <Button
              buttonType="anchor"
              mode={ButtonMode.Option}
              Icon={
                <img
                  src={Socials}
                  className=" w-5"
                  alt="phone number icon"
                ></img>
              }
              src="#"
              className=" gap-6"
            >
              +390 93 15 32 456
            </Button>
          </li>
          <li>
            <Button
              buttonType="anchor"
              mode={ButtonMode.Option}
              Icon={<img src={Socials} className=" w-5" alt="mail icon"></img>}
              src="#"
              className=" gap-6"
            >
              example@gmail.com
            </Button>
          </li>
          <li>
            <Button
              buttonType="anchor"
              mode={ButtonMode.Option}
              Icon={
                <img src={Socials} className=" w-5" alt="location icon"></img>
              }
              src="#"
              className=" gap-6"
            >
              Pidmurma 5a, Lviv
            </Button>
          </li>
        </ul>
      </div>
      <div className="contactCard__bottom">
        <ul className="flex gap-1.5">
          <li>
            <Button
              buttonType="anchor"
              mode={ButtonMode.Option}
              Icon={
                <img
                  src={Socials}
                  className=" w-7"
                  alt="socials image: facebook"
                ></img>
              }
              src="#"
              className=" gap-6"
            ></Button>
          </li>
          <li>
            <Button
              buttonType="anchor"
              mode={ButtonMode.Option}
              Icon={
                <img
                  src={Socials}
                  className=" w-7"
                  alt="socials image: facebook"
                ></img>
              }
              src="#"
              className=" gap-6"
            ></Button>
          </li>
          <li>
            <Button
              buttonType="anchor"
              mode={ButtonMode.Option}
              Icon={
                <img
                  src={Socials}
                  className=" w-7"
                  alt="socials image: facebook"
                ></img>
              }
              src="#"
              className=" gap-6"
            ></Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
