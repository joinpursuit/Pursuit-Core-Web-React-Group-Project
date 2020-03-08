import React from 'react'
import HandleSignUp from './HandleSignUp'
import {Link} from 'react-router-dom'

function LoginForm () {
    return (
        <form className="loginform">
            <input placeholder= "Email"></input>
            <input placeholder= "Password"></input>
            <button >login</button>
            <Link to= {"/signup"}><button onClick={HandleSignUp}> Sign Up </button></Link>
        </form>
    )
}

export default LoginForm