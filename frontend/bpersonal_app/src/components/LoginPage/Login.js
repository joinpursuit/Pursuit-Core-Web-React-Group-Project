import React from "react";
<<<<<<< HEAD:bpersonal_app/src/components/LoginPage/Login.js
// import LoginForm from './LoginForm'
import { Route, Switch } from "react-router-dom";
=======
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {Switch} from 'react-router-dom'

>>>>>>> d273e2abe79295a8afd5c45ab819603a62cd41c4:frontend/bpersonal_app/src/components/LoginPage/Login.js

function Login() {
    return (
        <div className="Login">
            <Switch>
                <LoginForm/>
                <SignUpForm/>
            </Switch>
<<<<<<< HEAD:bpersonal_app/src/components/LoginPage/Login.js
=======

>>>>>>> d273e2abe79295a8afd5c45ab819603a62cd41c4:frontend/bpersonal_app/src/components/LoginPage/Login.js
        </div>
    )
  }
  
export default Login;