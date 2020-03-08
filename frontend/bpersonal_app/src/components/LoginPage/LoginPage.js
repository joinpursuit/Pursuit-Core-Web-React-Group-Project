import React, { useState } from "react";
import axios from 'axios'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import UserLogin from "./UserLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [isloggedIn, setLoggedIn] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await axios.get(`http://localhost:3001/users/search/${user}`)
    console.log(res);
    debugger
    let { body } = res.data;
    if (
      body.user.password === password &&
      body.user.username === user
    ) {
      sessionStorage.userID = body.user.id;
    } else {}
    
    // debugger  
  }
  
  const login = () => {

  }

    

    if(!isloggedIn) {
      return (
        <form className="loginform">
            <input placeholder="Email" onChange={e => setUser(e.target.value)} ></input>
            <input placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
            <button value="" onClick={handleSubmit}>login</button>
            <Link to={"/signup"}>
                <button > Sign Up </button>
            </Link>
        </form>
      );
    } else {
      return (
        <form className="signupform">
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <input placeholder="Email"></input>
          <input placeholder="Full Name"></input>
          <input placeholder="Bio"></input>
          <button>Sign Up</button>
          <Link to={"/login"}>
            <button> Log In </button>
          </Link>
        </form>
      );
    }
  
};

export default LoginPage;
