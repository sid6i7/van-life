import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/host/HostVanDetailNavBar.css";

export const HostVanDetailNavBar = ({ vanId }) => {
    const activePageStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
      };
  return (
    <nav className="host-van-detail--navbar">
      <NavLink
        to={`.`}
        end
        style={({ isActive }) => (isActive ? activePageStyle : null)}
      >
        Details
      </NavLink>
      <NavLink
        to={`pricing`}
        style={({ isActive }) => (isActive ? activePageStyle : null)}
      >
        Pricing
      </NavLink>
      <NavLink
        to={`photos`}
        style={({ isActive }) => (isActive ? activePageStyle : null)}
      >
        Photos
      </NavLink>
    </nav>
  );
};
