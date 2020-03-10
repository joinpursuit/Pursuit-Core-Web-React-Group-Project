import React from "react";
import '../css/navBar.css'
// import 
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
    <form className={"search"} onSubmit={""}>
      <input placeholder={"Search for hashtags here !"}></input>
      <Link to={"/results"}><button>SEARCH ME</button></Link>
    </form>
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
