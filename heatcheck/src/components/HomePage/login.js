import React from 'react';
import loginIcon from "./signIn.svg"
import "../../css/form.scss"


const Login = (props) => {

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
            <input type="text" name="e-mail" placeholder="E-mail" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" required/>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">Login</button>
      </div>
    </div>
  )
}

export default Login

