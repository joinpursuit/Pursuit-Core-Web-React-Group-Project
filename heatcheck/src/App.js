import React from 'react';
import feedpage from './components/Feedpage/feedPage'
import HomePage from './components/HomePage/homePage'
import Login from "./components/HomePage/login"
import NavBar from "./components/Feedpage/nav_bar"
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div></div>
     <HomePage/>
     <Login/>
     <NavBar/>

     <feedpage/>
      {/* //<Posts /> */}
    </div>
  );
}

export default App;
