import React from 'react';
import feedpage from './components/Feedpage/feedPage'
import HomePage from './components/HomePage/homePage'
import Login from "./components/HomePage/login"
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div></div>
     <HomePage/>
     <Login/>

     <feedpage/>

    </div>
  );
}

export default App;
