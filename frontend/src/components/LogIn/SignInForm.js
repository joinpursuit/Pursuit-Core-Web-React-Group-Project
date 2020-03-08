import React, { useState } from "react";
import { useInput } from "../../util/customHooks";
import { Link } from "react-router-dom"
import OurCanvasLogoSplat from "../../images/OurCanvasLogoSplat.jpg";
import '../../css/SignIn.css';

const SignInForm = ({ handleLogIn }) => {
  const email = useInput("");

  return (
    <div className="signInFormDiv">
      <div>
        <img src={OurCanvasLogoSplat} alt="" />
      </div>

      <form
        onSubmit={e => {
          e.preventDefault();
          handleLogIn(email.value);
        }}
        className="signInForm"
      >
        <label>
          Email :
          <input type="text" placeholder="Enter Your Email" {...email} className="textInput signInEmail"/>
        </label>
        <input type="submit" value="Sign In" className="button signInSubmit"/>
      </form>

      <div className="signInSwitchContainer">
        <Link to="/signup">
          <input type="button" value="Sign up" className="button signInSwitch"/>
        </Link>
      </div>
    </div>
  );
};
export default SignInForm;
