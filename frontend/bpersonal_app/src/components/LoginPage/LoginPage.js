import React, { useState } from "react";
import axios from 'axios'
import {Animated} from "react-animated-css";
import '../../css/login.css'

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
        setTimeout(function() {
          window.location.href = "/feedpage";
          window.location.href.reload();
        }, []);
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
        <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={2500} animationOutDuration={2500} isVisible={true}>
          <form className="loginform">
            <input type="text" placeholder="Username" onChange={e => setUser(e.target.value)} ></input>
            <br/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
            <br/>
            <button value="" onClick={handleLogin}>login</button>
            <br/>
            <button onClick={signUpForm}> Sign Up </button>
          </form>
        </Animated>
      );
    } else {
      return (
        <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
          <form className="signupform">
            <input type="text" placeholder="Username" onChange={e => setUser(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
            <input type="text" placeholder="Full Name" onChange={e => setFullName(e.target.value)}></input>
            <input type="text" placeholder="Bio" onChange={e => setBio(e.target.value)}></input>
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={signUpForm}> Log In </button>
          </form>
        </Animated>
      );
    }
  
};

export default LoginPage;
