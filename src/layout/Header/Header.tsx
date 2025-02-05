import Nav from "../Nav/Nav";
import logo from "../../assets/Logo.png";
import CustomInput from "../../components/core/CustomInput/CustomInput";
import search from "../../assets/Vector.svg";
import { ButtonMode } from "../../enums/ButtonMode";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-16">
      <div className="flex gap-20">
        <img src={logo} alt="logo image" />
        <Nav></Nav>
      </div>
      <div className="w-full max-w-[26rem] sm:max-w-[14rem] md:max-w-[20rem] lg:max-w-[26rem]">
        <CustomInput
          className="w-full"
          Icon={<img src={search} alt="search icon"></img>}
          buttonMode={ButtonMode.Primary}
          onButtonClick={() => console.log("clicked")}
          buttonClassName="rounded-[2px]"
          placeholder="Search this site"
        />
      </div>
    </header>
  );
}
