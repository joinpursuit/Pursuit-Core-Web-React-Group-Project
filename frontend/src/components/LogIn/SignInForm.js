import React, { useState } from "react";
import { useInput } from "../../util/customHooks";
import { Link } from "react-router-dom"
import OurCanvasLogoSplat from "../../images/OurCanvasLogoSplat.jpg";
import '../../css/SignIn.css';

const SignInForm = ({ handleLogIn, error }) => {
  const email = useInput("");
// Make Inputs required
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
          <input type="email" placeholder="Enter Your Email" required {...email} className="textInput signInEmail"/>
        </label>
        <input type="submit" value="Sign In" className="button signInSubmit"/>

        {error ? <p className="error">Hello</p> : null}
      </form>

      <div className="signInSwitchContainer">
        <h6>
          Don't have an account yet?
          <Link to="/signUp" className="aTagWithDecoration">
            <h6 className="signInSwitch">Sign up to connect with artists near you</h6>
          </Link>
        </h6>
      </div>
    </div>
  );
};
export default SignInForm;
