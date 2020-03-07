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
      >
        <label>
          Email :
          <input type="text" placeholder="Enter Your Email" {...email} />
          <input type="submit" value="Sign In" />
        </label>
      </form>
      <input type="button" value="Sign up" />
    </div>
  );
};
export default SignInForm;
