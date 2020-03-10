import React, { useState } from "react";
import axios from 'axios'
<<<<<<< HEAD
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
=======
// import SignUpForm from './SignUpForm'
// import LoginForm from './LoginForm'
// import UserLogin from "./UserLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [bio, setBio] = useState("")
  const [isSignUpForm, setSignUpForm] = useState(false)
  const [isloggedIn, setLoggedIn] = useState(false)

  const handleLogin = async e => {
    e.preventDefault();
    let res = await axios.get(`/users/search/${userName}`)
    
    let { body } = res.data;
    console.log(body.user.password);
    console.log(password);
    console.log(body.user.username);
    console.log(userName);
    
    if (
      body.user.password === password &&
      body.user.username === userName
      ) {
        sessionStorage.userID = body.user.id;
        setLoggedIn(true)
      } else {
        console.log("Invalid login information");
      }  
    }
  
  const signUpForm = (e) => {
    e.preventDefault()
    setSignUpForm(!isSignUpForm)
  }

  const handleSignUp = async e => {
    e.preventDefault();
    let res = await axios.get(`/users/search/${userName}`)

    let { body } = res.data;

    if(userName === "" || !isNaN(userName) || body.user.username === userName){
      console.log("This is an invalid username")
    } else{
      console.log("Thank you for creating an account");
      await axios.post("/users/addUser", {username: userName, password: password, full_name: fullName, email_address: email, profile_pic_url: "", bio: bio})
      
    }

  }

    if(!isSignUpForm) {
      return (
        <form className="loginform">
            <input placeholder="Username" onChange={e => setUser(e.target.value)} ></input>
            <input placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
            <button value="" onClick={handleLogin
        }>login</button>
            <button onClick={signUpForm}> Sign Up </button>
>>>>>>> ca6dec2b33decafd7905a461a9bbb08612cd09f5
        </form>
      );
    } else {
      return (
        <form className="signupform">
<<<<<<< HEAD
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <input placeholder="Email"></input>
          <input placeholder="Full Name"></input>
          <input placeholder="Bio"></input>
          <button>Sign Up</button>
          <Link to={"/login"}>
            <button> Log In </button>
          </Link>
=======
          <input placeholder="Username" onChange={e => setUser(e.target.value)}></input>
          <input placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
          <input placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
          <input placeholder="Full Name" onChange={e => setFullName(e.target.value)}></input>
          <input placeholder="Bio" onChange={e => setBio(e.target.value)}></input>
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={signUpForm}> Log In </button>
>>>>>>> ca6dec2b33decafd7905a461a9bbb08612cd09f5
        </form>
      );
    }
  
};

export default LoginPage;
