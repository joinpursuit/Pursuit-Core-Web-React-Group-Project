import React, { useState, useEffect } from "react";

const Form = () => {
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
      </label>
    </form>
  )
}
export default Form;
 
