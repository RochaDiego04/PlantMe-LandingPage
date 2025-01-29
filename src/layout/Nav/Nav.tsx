import "./Nav.css";

export default function Nav() {
  return (
    <nav className="flex items-center">
      <ul className="list-with-separator">
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
          <a href="#">Eng</a>
        </li>
      </ul>
    </nav>
  );
}
