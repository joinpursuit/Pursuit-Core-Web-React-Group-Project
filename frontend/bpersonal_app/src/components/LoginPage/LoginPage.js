import React, { useState } from "react";
import axios from "axios";
import { Animated } from "react-animated-css";
import LeftSideLogin from "./LeftSideLogin";
import LogoImage from "../../css/cssImages/LogoImage2.PNG";
import "../../css/login.css";

const LoginPage = () => {
  const [userName, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [isSignUpForm, setSignUpForm] = useState(false);
  const [isloggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    try {
      let res = await axios.get(`/users/search/${userName}`);

      let { body } = res.data;
      if (body.user.password === password && body.user.username === userName) {
        sessionStorage.userID = body.user.id;
        setErrorMessage("Logging in");
        setLoggedIn(true);
        setTimeout(function() {
          window.location.href = "/feedpage";
          window.location.href.reload();
        }, []);
      } else {
        console.log("Invalid login information");
      }
    } catch (error) {
      setErrorMessage("Username and password invalid. Try again");
    }
  };

  const signUpForm = e => {
    e.preventDefault();
    setSignUpForm(!isSignUpForm);
  };

  const handleSignUp = async e => {
    e.preventDefault();
    if (userName === "" || password === "" || fullName === "" || email === "" || bio === ""){
      setErrorMessage("Please fill out all inputs")
    } else {
      signMeUp()
    }
    
  };
  const signMeUp = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.get(`/users/search/${userName}`);
      let { body } = res.data;

      if (body) {
        setErrorMessage("User already exists please log in")
      } else {
        await axios.post("/users/addUser", {
          username: userName,
          password: password,
          full_name: fullName,
          email_address: email,
          profile_pic_url: "",
          bio: bio
        });
        setErrorMessage("Thank you for signing up")
        console.log("Thank you for creating an account");
        console.log(body.user.id);
        await axios.get(`/users/search/${userName}`);
        setLoggedIn(true)
        sessionStorage.userID = body.user.id;
        setTimeout(function() {
        window.location.href = "/feedpage";
        window.location.href.reload();
      }, []);
        
    }
      
  } catch (error) {
      setErrorMessage("user doesnt exist ")
  } 

}

  if (!isSignUpForm) {
    return (
      <div className="login-container">
        <Animated
          animationIn="fadeInLeft"
          animationOut="fadeOutLeft"
          animationInDuration={2500}
          animationOutDuration={1400}
          isVisible={true}
        >
          <LeftSideLogin />
        </Animated>
        <div className="rightSide">
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOutLeft"
            animationInDuration={2500}
            animationOutDuration={2500}
            isVisible={true}>

            <img id="loginlogo" src={LogoImage} alt=""></img>
            <form className="loginsignup">
              <input
                type="text"
                placeholder="Username"
                onChange={e => setUser(e.target.value)}
              ></input>
              <br />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              <br />
              <br />
              <button value="" onClick={handleLogin}>
                login
              </button>
              <br />
              <br />
              <button onClick={signUpForm}> Sign Up </button>
            </form>
            <h5>{errorMessage}</h5>
          </Animated>
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-container">
        <LeftSideLogin />
        <div className="rightSide">
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOutRight"
            animationInDuration={2500}
            animationOutDuration={1400}
            isVisible={true}
          >
            <img id="loginlogo" src={LogoImage} alt=""></img>
            <form className="loginsignup">
              <input
                type="text"
                placeholder="Username"
                onChange={e => setUser(e.target.value)}
              ></input>
              <br />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              <br />
              <br />
              <input
                type="text"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              ></input>
              <br />
              <br />
              <input
                type="text"
                placeholder="Full Name"
                onChange={e => setFullName(e.target.value)}
              ></input>
              <br />
              <br />
              <input
                type="text"
                placeholder="Bio"
                onChange={e => setBio(e.target.value)}
              ></input>
              <br />
              <br />
              <button onClick={handleSignUp}>Sign Up</button>
              <br />
              <br />
              <button onClick={signUpForm}> Log In </button>
            </form>
            <h5>{errorMessage}</h5>
          </Animated>
        </div>
      </div>
    );
  }
};

export default LoginPage;
