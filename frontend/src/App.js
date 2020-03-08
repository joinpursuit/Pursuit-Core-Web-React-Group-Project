import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignInForm from "./components/LogIn/SignInForm";
import SignUpForm from "./components/LogIn/SignUpForm";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/General/Navbar";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogIn = email => {
    if (email) {
      //input database email check here
      setLoggedIn(true);
    } else {
      //input handling error here
    }
  };

  if (loggedIn) {
    return (
      <div className="App">
        <Navbar setLoggedIn={setLoggedIn}/>
        <Switch>
          <Redirect exact from="/login" to="/profile" />
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
          <SignUpForm />
        </Route>
      </Switch>
    );
  }
}
export default App;
