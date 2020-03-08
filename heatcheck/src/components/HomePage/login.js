import React from 'react';
import SignUpForm from "./signupForm";
import { Route,Switch } from "react-router-dom";

const LogIn = () => {
    return(
        <div className="LogInPage">
            <Switch>
                <SignUpForm/>
            </Switch>
        </div>
    );
};

export default LogIn;