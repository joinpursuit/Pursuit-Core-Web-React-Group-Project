import React from "react"

const signUpForm = () => {
    return(
        <form className="signUpForm">
        <input placeholder="Full Name"></input>,
        <input placeholder="User Name"></input>
        <input placeholder="Password"></input>
        <input placeholder="Email"></input>
        <input placeholder="Phone Number"></input>
        <button>Sign Up</button>
        </form>
        )
}

export default signUpForm;