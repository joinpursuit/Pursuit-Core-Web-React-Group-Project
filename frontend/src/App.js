import React from 'react';
import SignInForm from "./components/LogIn/SignInForm"
import SignUpForm from "./components/LogIn/SignUpForm"
import Home from "./components/Home/Home"

import './App.css';


function App() {
  return (
    <div className="App">
      <SignInForm/>
      <SignUpForm/>
      <Home/>
    </div>
  );
}

export default App;
