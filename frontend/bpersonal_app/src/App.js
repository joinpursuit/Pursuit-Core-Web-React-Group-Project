import React from "react";
import LoginForm from "./components/LoginPage/LoginForm";
import NavBar from "./components/NavBar";
import Profile from "./components/ProfilePage/Profile"
import Feed from "./components/FeedPage/Feed";
import SignUpForm from "./components/LoginPage/SignUpForm"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/login"}>
          <LoginForm/>
        </Route>
        <Route path={"/signup"}>
          <SignUpForm/>
        </Route>
        <Route path={"/feedpage"}>
          <Feed />
        </Route>
        <Route path={"/profilepage"}>
        <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
