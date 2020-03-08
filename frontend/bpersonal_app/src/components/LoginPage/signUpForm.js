import React from "react";

function SignUpForm() {
  return (
    <form className="signupform">
      <input placeholder="Username"></input>
      <input placeholder="Password"></input>
      <input placeholder="Email"></input>
      <input placeholder="Full Name"></input>
      <input placeholder="Bio"></input>
      <button>Sign Up</button>
    </form>
  );
}

export default SignUpForm;
