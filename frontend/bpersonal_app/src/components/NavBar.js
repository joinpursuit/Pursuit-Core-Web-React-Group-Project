import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useInput } from "../util/customHooks";
import "../css/navBar.css";
import LogoImage from "../../src/css/cssImages/LogoImage2.PNG";
import axios from "axios";

const NavBar = () => {

const searchInputObj = useInput("")
const searchInput = searchInputObj.value

const handleSearchInput = () => {
  sessionStorage.searchInput = searchInput;
}

const LogoutButton = () => {
  const handleLogOff = () => {
    sessionStorage.removeItem("userID");
  }
  return (
    <Link to={"/login"} > <button onClick={handleLogOff}>Log Out</button> </Link>
    )
}
  return (
    <>
    <header>
    <img src={LogoImage} id="navImage"/>
    </header>
    
    <nav>
      <form className={"search"} onSubmit={handleSearchInput}>
        <input type="text" placeholder={"Search for hashtags here !"} {...searchInputObj}></input>
          <Link to={`/results/${searchInput}`}><button type="submit">Search</button> </Link>
      </form>
      <NavLink exact to={"/feedpage"}>FEED</NavLink>
      <NavLink exact to={"/profilepage"}>
        PROFILE
      </NavLink>
      <LogoutButton/>
    </nav>
    </>
  );
};

export default NavBar;