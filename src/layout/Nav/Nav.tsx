import { useState } from "react";
import SelectDropdown from "../../components/core/SelectDropdown/SelectDropdown";
import "./Nav.css";

export default function Nav() {
  const [value, setValue] = useState("");

  return (
    <nav>
      <ul className="nav-menu">
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
        <li>
          <SelectDropdown
            value={value}
            onChange={setValue}
            placeholder={"eng"}
            options={["option 1", "option 2", "option 3"]}
          />
        </li>
      </ul>
    </nav>
  );
}
