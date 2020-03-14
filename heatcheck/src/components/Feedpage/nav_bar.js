import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = ({setLoggedIn}) => {
    return (
        <nav>
           <div className="nav">
               <NavLink to="/profile" className="navAnchor">Profile</NavLink>
               <NavLink to="/searchBar" className="navAnchor"></NavLink>placeholder="Search" />
               <NavLink to="/login" onClick={() => setLoggedIn(false)} className="navAnchor">Logout</NavLink>
           </div>
        </nav>
    )
}

export default Navbar;