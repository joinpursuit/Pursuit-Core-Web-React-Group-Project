import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form className="signupform">
      <input placeholder="Username"></input>
      <input placeholder="Password"></input>
      <input placeholder="Email"></input>
      <input placeholder="Full Name"></input>
      <input placeholder="Bio"></input>
      <button>Sign Up</button>
      <Link to={"/login"}>
        <button> Log In </button>
      </Link>
    </form>
  );
};

export default SignUpForm;
