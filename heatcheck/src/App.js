import React from 'react';
//import feedpage from './components/Feedpage/feedPage'
import HomePage from './components/HomePage/homePage'
import Login from "./components/HomePage/login"
import SignUp from "./components/HomePage/signup"
// import NavBar from "./components/Feedpage/nav_bar"
import {Route, Switch} from 'react-router-dom'
import UploadPost from './components/Feedpage/uploadPost'
import SearchBar from "./components/Feedpage/searchBar"

// import TrendingReactions from './components/Feedpage/treanding'

function App() {
  return (
    <div className="App">

    <HomePage/>
     {/* <TrendingReactions/> */}
     {/* <UploadPost/> */}

    </div>
  );
}

export default App;
