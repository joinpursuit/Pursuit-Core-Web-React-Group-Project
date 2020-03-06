import React, { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  console.log(email)

  return(
    <form onSubmit={handleSubmit}>
      <label>
        email : 
        <input 
        onChange={(e)=> setEmail(e.target.value)}
        type="text" 
        placeholder="Enter Your Email"
        value={email}
        />
        <input
        type="submit"
        value="Sign In"
        />
        <input
        type="submit"
        value="Sign up"
        />
      </label>
    </form>
  )
}
export default SignInForm;
 
