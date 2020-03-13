import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
           <div className="nav">
                <form className={"search"}>
                    <input placeholder={"Search"}></input>
                    <Link to={"/searchBar"}></Link>
                </form>
                
               <NavLink exact to="/" className="navAnchor">Home</NavLink>
               <NavLink to="/comments" className="navAnchor">Comments</NavLink>
               <NavLink to="/posts" className="navAnchor">Posts</NavLink>
               <NavLink to="../HomePage/homePage" className="navAnchor">HomePage</NavLink>
           </div>
        </nav>
    )
}

export default Navbar;