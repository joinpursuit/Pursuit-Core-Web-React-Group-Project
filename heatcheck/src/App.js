import React from 'react';
import feedpage from './components/Feedpage/feedPage'
import HomePage from './components/HomePage/homePage'
import Login from "./components/HomePage/login"
import NavBar from "./components/Feedpage/nav_bar"
import {Route, Switch} from 'react-router-dom'
import UploadPost from './components/Feedpage/uploadPost'
import TrendingReactions from './components/Feedpage/treanding'

function App() {
  return (
    <div className="App">
     <TrendingReactions/>
    </div>
  );
}

export default App;
