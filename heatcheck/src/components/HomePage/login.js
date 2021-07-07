import React from 'react';
import axios from "axios"
import {useInput} from "../../util/customHooks.js"
import loginIcon from "./signIn.svg"
import "../../css/form.scss"


const Login = (props) => {
  const newEmail = useInput("")
  const newPassword = useInput("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let email = newEmail.value;
      let password = newPassword.value;
      let res = await axios.post("http://localhost:3001/users/login",{email, password});
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  return(
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginIcon} alt=""/>
        </div>
        <div className="form">
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
        <button type="button" className="btn" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login

