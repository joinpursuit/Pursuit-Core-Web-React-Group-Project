import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/NavBar.css';

const Navbar = () => {
    return (
        <nav>
           <div className="nav">
               <NavLink exact to="/" className="navAnchor">Home</NavLink>
               <NavLink to="/profile" className="navAnchor">Profile</NavLink>
           </div>
        </nav>
    )

}

export default Navbar;
