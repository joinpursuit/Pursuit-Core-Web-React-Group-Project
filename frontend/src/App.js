import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import SignInForm from "./components/LogIn/SignInForm";
import SignUpForm from "./components/LogIn/SignUpForm";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/General/Navbar";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = (email) => {
    setLoggedIn(true);
  };

  const handleSignUp = (user) => {
    console.log(user);
    // Pass in values into database
    setLoggedIn(true);
  }

  if (loggedIn) {
    return (
      <div className="App">
        <Navbar setLoggedIn={setLoggedIn}/>
        <Switch>
          <Redirect exact from="/login" to="/" />
          <Redirect exact from="/signup" to="/" />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  } else {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Redirect exact from="/profile" to="/login" />
        <Route path={"/login"}>
          <SignInForm handleLogIn={handleLogIn} />
        </Route>
        <Route path={"/signup"}>
          <SignUpForm handleSignUp={handleSignUp}/>
        </Route>
      </Switch>
    );
  }
}
export default App;
