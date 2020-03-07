import React from 'react'
import handleSignUpForm from './handleSignUpForm'

function loginForm () {
    return (
        <form className="loginform">
            <input placeholder= "Email"></input>
            <input placeholder= "Password"></input>
            <button onClick={}>login</button>
            <button onClick={<handleSignUpForm/>}>Sign Up</button>
        </form>
    )
}

export default loginForm