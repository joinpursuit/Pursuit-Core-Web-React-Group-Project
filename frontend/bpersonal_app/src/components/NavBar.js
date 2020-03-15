import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useInput } from "../util/customHooks";
import "../css/navBar.css";
import LogoImage from "../../src/css/cssImages/LogoImage2.PNG";
import axios from "axios";

const NavBar = () => {
  const searchInputObj = useInput("");
  const searchInput = searchInputObj.value;

  const handleSearchInput = () => {
    sessionStorage.searchInput = searchInput;
  };

  const LogoutButton = () => {
    const handleLogOff = () => {
      sessionStorage.removeItem("userID");
    };
    return (
      <Link to={"/login"}>
        {" "}
        <button onClick={handleLogOff}>Log Out</button>{" "}
      </Link>
    );
  };
  return (
    <>
      <header id="headerNav">
        <img src={LogoImage} id="navImage" />

        <nav>
          <form className={"search"} onSubmit={handleSearchInput}>
            <input
              id="searchInput"
              type="text"
              placeholder={"Search"}
              {...searchInputObj}
            ></input>
            <Link to={`/results/${searchInput}`}>
              <button type="submit">Search</button>{" "}
            </Link>
          </form>
          <section id="feed">
            <NavLink exact to={"/feedpage"}>
              FEED
            </NavLink>
          </section>
          <section id="profile">
            <NavLink exact to={"/profilepage"}>
              PROFILE
            </NavLink>
          </section>
          <LogoutButton />
        </nav>
      </header>
    </>
  );
};

export default NavBar;
