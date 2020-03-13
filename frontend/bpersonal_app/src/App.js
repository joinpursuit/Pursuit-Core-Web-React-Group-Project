import React from "react";
import "./App.css";

import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar";
import Profile from "./components/ProfilePage/Profile";
import Feed from "./components/FeedPage/Feed";
import SignUpForm from "./components/LoginPage/SignUpForm";
import Results from "./components/ResultsPage/Results"
import LogoutButton from "./components/UniversalComponents/LogoutButton"

import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  
  const NavBarView = () => {
    let location = useLocation()
    
    if(location.pathname === "/login" || location.pathname === "/signup") {
      return false
    }else {
      return true
    }
  }
  const LoginView = () => {
    let location = useLocation()
    
    if(location.pathname === "/" ) {
      return true
    }else {
      return false
    }
  }
  
    return (
      <div className="App">

      {NavBarView() ? <NavBar/> : null}
      {/* {LoginView() ? <LoginPage /> : null} */}
      <Switch>
        <Route path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact to path={"/results"}>
          <Results />
        </Route>
        <Route exact to path={"/signup"}>
          <SignUpForm />
        </Route>

        <Route exact to path={"/feedpage"}>
          <Feed />
          {/* <LogoutButton /> */}
        </Route>
        <Route exact to path={"/profilepage"}>
          <Profile />
        </Route>
      </Switch>

    </div>
  );
  
}

export default App;
