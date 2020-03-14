import React from 'react';
import axios from "axios"
import {useInput} from "../../util/customHooks.js"
import loginIcon from "./signIn.svg"
import "../../css/form.scss"

const SignUp = (props) => {
  const newFullName = useInput("")
  const newUsername = useInput("")
  const newEmail = useInput("")
  const newPassword = useInput("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let full_name = newFullName.value;
      let user_name = newUsername.value;
      let email = newEmail.value;
      let password = newPassword.value;
      await axios.post("http://localhost:3001/users",{full_name, email, user_name, password});
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <div className="base-container signup" ref={props.containerRef}>
      <div className="header">Sign Up</div>
      <div className="content">
        <div className="image">
          <img src={loginIcon} alt=""/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" placeholder="Full Name" {...newFullName} required/>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" {...newUsername} required/>
          </div>
          <div className="form-group">
            <label htmlFor="e-mail">E-mail</label>
            <input type="text" name="e-mail" placeholder="E-mail" {...newEmail} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" {...newPassword} required/>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp