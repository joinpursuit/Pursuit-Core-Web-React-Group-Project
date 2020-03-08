import React from "react";
import '../css/navBar.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to={"/feedpage"}>
        FEED
      </NavLink>
      <NavLink exact to={"/profilepage"}>
        PROFILE
      </NavLink>
    </nav>
  );
};

export default NavBar;
