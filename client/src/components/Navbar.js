import { NavLink, useLoaderData } from "react-router-dom";
import css from "../css/Navbar.css";
import { CgProfile } from "react-icons/cg";
import { RiLoginCircleLine } from "react-icons/ri";
import { isAuthenticated } from "../utils/auth";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Navbar = ({isLoggedIn}) => {

  return (
    <header>
      <nav id="navbar">
        <ul id="navbar--items">
          <li id='navbar--website'>
            <NavLink
            to={"."}
            className={({isActive}) => isActive ? 'navbar--active' : null}
            > #VANLIFE </NavLink>
          </li>
          <li>
            <NavLink
            to={"host/1"} //TODO: implement hostId
            className={({isActive}) => isActive ? 'navbar--active' : null}
            >Host</NavLink>
          </li>
          <li>
            <NavLink
              to={"about"}
              className={({isActive}) => isActive ? 'navbar--active' : null}
              >About</NavLink>
          </li>
          <li>
            <NavLink 
              to={"vans"}
              className={({isActive}) => isActive ? 'navbar--active' : null}
              >Vans</NavLink>
          </li>
          <li>
            <NavLink
              to={isLoggedIn ? "profile" : "login"}
              className={({isActive}) => isActive ? 'navbar--active' : null}
            >
              {isLoggedIn ? <CgProfile size={'30px'}/> : <RiLoginCircleLine size={'30px'}/>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
