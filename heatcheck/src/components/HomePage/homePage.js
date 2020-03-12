//home page
import React, { useState, useEffect, useRef} from 'react';
import Login from "./login.js"
import SignUp from "./signup.js"
import "../../css/homePage.scss"

const RightSide = (props) => {
  return (
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.active}Hi</div>
      </div>
    </div>
  )
}


const HomePage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true)
  const active = isLoginActive ? "Sign Up" : "Login"
  const containerRef = useRef(null)
  const rightSideRef = useRef(null)
  let rightSideClass = ""

  const changeState = () => {
    if(isLoginActive){
      rightSideClass = "left"
    } else {
      rightSideClass = "right"
    }
    setIsLoginActive(!isLoginActive)
  }
  
  useEffect(() => {
    rightSideClass = "right"
  },[])

  return(
    <div className="HomePage">
      <div className="login">
        <div className="container" ref={containerRef}>
          {isLoginActive && (<Login containerRef={containerRef}/>)}
          {!isLoginActive && (<SignUp containerRef={containerRef}/>)}
        </div>
        <RightSide className={rightSideClass} active={active}  onClick={changeState}/>
      </div>
    </div>
  )
}

export default HomePage;