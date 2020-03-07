import React from "react";
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
// import {Switch} from 'react-router-dom'


function Login() {
    return (
        <div className="Login">
                <LoginForm/>
                
                <SignUpForm/>
        </div>
    )
  }
  
export default Login;