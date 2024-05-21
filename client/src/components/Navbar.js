import { NavLink } from "react-router-dom";
import css from "../css/Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav id="navbar">
        <ul id="navbar--items">
          <li id='navbar--website'>
            <NavLink
            to={"/"}
            className={({isActive}) => isActive ? 'navbar--active' : null}
            > #VANLIFE </NavLink>
          </li>
          <li>
            <NavLink
            to={"/host"}
            className={({isActive}) => isActive ? 'navbar--active' : null}
            >Host</NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({isActive}) => isActive ? 'navbar--active' : null}
              >About</NavLink>
          </li>
          <li>
            <NavLink 
              to={"/vans"}
              className={({isActive}) => isActive ? 'navbar--active' : null}
              >Vans</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
