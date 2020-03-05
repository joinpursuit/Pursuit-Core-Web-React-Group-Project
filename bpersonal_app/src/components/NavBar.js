import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to ={"/feed"}>FEED</NavLink>
            <NavLink to ={"/profile"}>PROFILE</NavLink>
        </nav>
    )
}

export default NavBar;