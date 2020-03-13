// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "../../css/Navbar.css";

// const Navbar = ({ setLoggedIn }) => {
//   return (
//     <nav>
//       <div className="navLeft">
//         {/* Put Logo here */}
//         logo
//       </div>
//       <div className="navRight">
//         <NavLink exact to="/">
//           Home
//         </NavLink>
//         <NavLink to="/profile">Profile</NavLink>
//         <input type="text" placeholder="Search By Tag" className="search" />
//         <NavLink to="/login" onClick={() => setLoggedIn(false)}>
//           Logout
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import OurCanvasLogoSplat from "../../images/OurCanvasLogoSplat.png";
import "../../css/Navbar.css";

const Navbar = ({ setLoggedIn }) => {
  return (
    <nav>
      <div className="navLeft">
        <img src={OurCanvasLogoSplat} alt="logo" className="navLogo" />
      </div>
      <div className="navRight">
        <NavLink exact to="/" className="navAnchor">
          Home
        </NavLink>
        <NavLink to="/profile" className="navAnchor">
          Profile
        </NavLink>
        <input type="search" placeholder="Search By Tag" className="search" />
        <NavLink
          to="/login"
          onClick={() => setLoggedIn(false)}
          className="navAnchor"
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
