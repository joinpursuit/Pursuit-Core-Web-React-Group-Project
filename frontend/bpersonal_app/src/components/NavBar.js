import React from "react";
import { NavLink, Link } from "react-router-dom";
import {useInput} from '../util/customHooks'
import axios from "axios";

const NavBar = () => {
const searchInputObj = useInput("")
const searchInput = searchInputObj.value

const handleSearchForm = (input) => {

}

  return (
    <nav>
      <form className={"search"} onSubmit={() => handleSearchForm(searchInput)}>
        <input type="text" placeholder={"Search for hashtags here !"} {...searchInputObj}></input>
          <Link to={"/results"}><button type="submit">Search</button> </Link>
      </form>
      <NavLink to={"/feedpage"}>FEED</NavLink>
      <NavLink to={"/profilepage"}>
        PROFILE
      </NavLink>
    </nav>
  );
};

export default NavBar;