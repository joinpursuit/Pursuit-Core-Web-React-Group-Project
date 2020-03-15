import React from "react";
import Feedpage from "./components/Feedpage/feedPage";
import Userpage from "./components/Userpage";
import HomePage from "./components/HomePage/homePage";
import Login from "./components/HomePage/login";
import SignUp from "./components/HomePage/signup";
import NavBar from "./components/Feedpage/nav_bar"
import { Route, Switch } from "react-router-dom";
import UploadPost from "./components/Feedpage/uploadPost";
import SearchBar from "./components/Feedpage/searchBar";

import TrendingReactions from "./components/Feedpage/trending";

function App() {
  return (
    <div className="App">
      {/* <SearchBar/>
      <Feedpage />
      <NavBar/> */}
      {/* <Userpage />  */}
      {/* <HomePage /> */}
      <TrendingReactions/>
      {/* <UploadPost/> */}
    </div>
  );
}

export default App;
