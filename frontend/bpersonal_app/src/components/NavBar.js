import React from "react";
import { NavLink, Link } from "react-router-dom";
import {useInput} from '../util/customHooks'
import axios from "axios";
import LogoImage from "../../src/css/cssImages/LogoImage2.PNG"

const NavBar = () => {
const searchInputObj = useInput("")
const searchInput = searchInputObj.value

const handleSearchForm = (input) => {
  
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
      <form className={"search"} onSubmit={() => handleSearchForm(searchInput)}>
        <input type="text" placeholder={"Search for hashtags here !"} {...searchInputObj}></input>
          <Link to={"/results"}><button type="submit">Search</button> </Link>
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
