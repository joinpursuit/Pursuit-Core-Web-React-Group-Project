import React, { useState } from "react";
import { useInput } from "../../util/customHooks";

const SignInForm = ({ handleSubmit }) => {
  const email = useInput("");

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="signInForm"
      >
        <label>
          Email :
          <input type="text" placeholder="Enter Your Email" {...email} className="textInput signInEmail"/>
        </label>
        <input type="submit" value="Sign In" className="button signInSubmit"/>
      </form>
      <input type="button" value="Sign up" className="button signInSwitch"/>
    </div>
  );
};
export default SignInForm;
