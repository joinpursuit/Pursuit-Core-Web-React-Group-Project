import React from "react";
// import feedpage from './components/Feedpage/feedPage'
// import HomePage from './components/HomePage/homePage'
import Posts from "./components/Feedpage/posts";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <feedpage/> */}
      <Posts />
    </div>
  );
}

export default App;
