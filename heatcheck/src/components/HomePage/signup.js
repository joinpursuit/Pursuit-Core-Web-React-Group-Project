import React from 'react';
import loginIcon from "./signIn.svg"
import "../../css/form.scss"

const SignUp = (props) => {
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
            <input type="text" name="fullName" placeholder="Full Name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" required/>
          </div>
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
        <button type="button" className="btn">Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp