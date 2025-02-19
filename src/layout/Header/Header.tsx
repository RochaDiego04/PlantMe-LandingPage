import { useState } from "react";
import Nav from "../Nav/Nav";
import logo from "../../assets/Logo.png";
import CustomInput from "../../components/core/CustomInput/CustomInput";
import search from "../../assets/Vector.svg";
import { ButtonMode } from "../../enums/ButtonMode";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-16">
      {/* Logo and Navigation */}
      <div className="flex items-center gap-6 md:gap-20">
        <img src={logo} className="w-8 h-8" alt="logo" />
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "X" : "="}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <Nav />
        </nav>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-[20rem] sm:max-w-[14rem] md:max-w-[22rem] lg:max-w-[26rem]">
        <CustomInput
          className="w-full"
          Icon={<img src={search} alt="search icon"></img>}
          buttonMode={ButtonMode.Primary}
          onButtonClick={() => console.log("clicked")}
          buttonClassName="rounded-[2px]"
          placeholder="Search this site"
        />
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <Nav />
        </div>
      )}
    </header>
  );
}
