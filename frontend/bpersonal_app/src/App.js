import React from "react";
import Login from "./components/LoginPage/Login";
import NavBar from "./components/NavBar";
import Feed from "./components/FeedPage/Feed";
import ProfilePage from "./components/ProfilePage/Profile";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/signup"}></Route>
        <Route path={"/feedpage"}>
          <Feed />
        </Route>
        <Route path={"/profilepage"}>
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
