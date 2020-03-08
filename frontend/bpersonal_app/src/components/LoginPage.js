import React from "react";
import HandleLogin from "./UserLogin";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
    console.log(props);
    debugger
  return (
    <form className="loginform">
      <input placeholder="Email"></input>
      <input placeholder="Password"></input>
      <button>login</button>
      <Link to={"/signup"}>
        {/* <button onClick={}> Sign Up </button> */}
      </Link>
    </form>
  );
};

export default LoginForm;
