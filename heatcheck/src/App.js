import React from 'react';
import feedpage from './components/Feedpage/feedPage'
import HomePage from './components/HomePage/homePage'
import Login from "./components/HomePage/login"
import {Route, Switch} from 'react-router-dom'
import UploadPost from './components/Feedpage/uploadPost'

function App() {
  return (
    <div className="App">
      <div></div>
     {/* <HomePage/> */}
     {/* <Login/> */}
     <UploadPost/>

     {/* <feedpage/> */}
    </div>
  );
}

export default App;
