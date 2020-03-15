import React from "react";
import Feedpage from "./components/Feedpage/feedPage";
import Friendpage from "./components/friendpage";
import Userpage from "./components/Userpage";
import HomePage from "./components/HomePage/homePage";
import { Route, Switch } from "react-router-dom";
import UploadPost from "./components/Feedpage/uploadPost";
import SearchBar from "./components/Feedpage/searchBar";

import TrendingReactions from "./components/Feedpage/trending";

function App() {
  return (
    <div className="App">
      <Switch>
    <Route exact path={"/"}>
      <HomePage/>
    </Route>
    <Route path={"/feed"}>
    <Feedpage/>
    </Route>
      {/* <SearchBar/> */}
      {/* <NavBar/> */}
      {/* <Userpage />  */}
      {/* <TrendingReactions/> */}
      {/* <UploadPost/> */}
        <div>
          404 Error
        </div>
      </Switch>
    </div>
  );
}

export default App;
