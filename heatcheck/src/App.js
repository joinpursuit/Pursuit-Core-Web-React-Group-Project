import React from 'react';
import feedpage from './components/Feedpage/feedPage'
import HomePage from './components/HomePage/homePage'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
     <HomePage/>
     <feedpage/>

    </div>
  );
}

export default App;
