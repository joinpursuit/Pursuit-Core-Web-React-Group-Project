import React from "react";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <form className={"search"}>
        <input placeholder={"Search for hashtags here !"}></input>
        <Link to={"/results"}>
          <button>SEARCH ME</button>
        </Link>
      </form>
      <NavLink to={"/feedpage"}>FEED</NavLink>
      <NavLink exact to={"/profilepage"}>
        PROFILE
      </NavLink>
    </nav>
  );
};

export default NavBar;
