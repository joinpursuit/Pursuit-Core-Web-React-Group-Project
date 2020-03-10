import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar";
import Profile from "./components/ProfilePage/Profile"
import Feed from "./components/FeedPage/Feed";
// import SignUpForm from "./components/LoginPage/SignUpForm"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"}>
          <LoginPage/>
        </Route>
      <NavBar />
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
