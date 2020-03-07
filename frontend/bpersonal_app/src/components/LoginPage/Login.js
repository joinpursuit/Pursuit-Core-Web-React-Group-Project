import React from "react";
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {Switch} from 'react-router-dom'


function Login() {
    return (
        <div className="Login">
            <Switch>
                <LoginForm/>
                <SignUpForm/>
            </Switch>

        </div>
    )
  }
  
export default Login;