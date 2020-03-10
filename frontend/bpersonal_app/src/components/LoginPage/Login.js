import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Route, Switch } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <Switch>
        <LoginForm />
        <SignUpForm />
      </Switch>
    </div>
  );
};

export default Login;
