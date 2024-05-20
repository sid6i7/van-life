import { Link } from "react-router-dom";
import css from "../css/Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav id="navbar">
      <ul id="navbar--items">
        <li id='navbar--website'>
        <Link to={"/"}> #VANLIFE </Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>Vans</li>
      </ul>
    </nav>
    </header>
  );
};
