import React, { useState } from "react";
import { useInput } from "../../util/customHooks";

const SignInForm = () => {
  const email = useInput("");
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
