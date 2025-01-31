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
      <div>
        <CustomInput
          className="max-w-[500px] sm:w-[14rem] md:w-[20rem] lg:w-[26rem] rounded-[4px]"
          Icon={<img src={search} alt="search icon"></img>}
          buttonMode={ButtonMode.Primary}
          buttonClassName="rounded-[2px]"
          placeholder="Search this site"
        />
      </div>
    </header>
  );
}
