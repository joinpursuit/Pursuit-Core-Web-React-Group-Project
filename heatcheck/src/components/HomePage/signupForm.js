import React, { useState } from "react";
import { Link } from "react-router-dom";

// const handleChange = e => {
//     const [submit, setSubmit] = useState(false)
//     e.preventDefault();

// }



const signUpForm = () => {
    return(
        <form className="signUpForm">
        <input placeholder="Full Name"></input>,
        <input placeholder="User Name"></input>
        <input placeholder="Password"></input>
        <input placeholder="Email"></input>
        <input placeholder="Phone Number"></input>
        <input type="file"></input>
        <button>Sign Up</button>
        </form>
        )
}

export default signUpForm;