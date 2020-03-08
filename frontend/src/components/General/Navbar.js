import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Navbar.css';

const Navbar = () => {
    return (
        <nav>
           <div className="navLeft">
                {/* Put Logo here */}
                logo
           </div>
           <div className="navRight">
               <p>Home</p>
               <p>Profile</p>
               <input type="text" placeholder="Search By Tag" className="search"/>
               <p>Logout</p>
           </div>
        </nav>
    )
}

export default Navbar;