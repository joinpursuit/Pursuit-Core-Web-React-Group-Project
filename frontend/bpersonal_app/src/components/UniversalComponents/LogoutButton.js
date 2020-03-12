import React from 'react'
import { Link } from 'react-router-dom'

const LogoutButton = () => {
    // e.preventDefault();
    sessionStorage.removeItem("userID");
    // sessionStorage.userID = 0
    return (
        <Link to={"/login"}> <button>Log Out</button> </Link>
    )
}

export default LogoutButton
