import React from "react";
import handleSignUpForm from "./handleSignUpForm";

function LoginForm() {
  return (
    <form className="loginform">
      <input placeholder="Email"></input>
      <input placeholder="Password"></input>
      <button>login</button>
      <button onClick={<handleSignUpForm />}>Sign Up</button>
    </form>
  );
}

export default LoginForm;
