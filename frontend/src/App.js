import React from "react";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./components/LogIn/SignInForm";
import SignUpForm from "./components/LogIn/SignUpForm";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"}>
          <SignInForm />
        </Route>
        <Route path={"/signup"}>
          <SignUpForm />
        </Route>
        <Route path={"/profile"}>
          <Profile />
        </Route>
        <Route exact path={"/"}>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
