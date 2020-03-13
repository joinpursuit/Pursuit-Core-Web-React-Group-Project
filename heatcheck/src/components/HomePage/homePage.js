import React, { useState, useEffect, useRef} from 'react';
import Login from "./login.js"
import SignUp from "./signup.js"
import "../../css/homePage.scss"

const RightSide = (props) => {
  return (
    <div className={props.classnames}ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.active}</div>
      </div>
    </div>
  )
}


const HomePage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true)
  const active = isLoginActive ? "Sign Up" : "Login"
  const containerRef = useRef(null)
  const [rightSideClass, setRightSideClass] = useState("right-side")

  const changeState = () => {
    if(isLoginActive){
      setRightSideClass("right-side left")
    } else {
      setRightSideClass("right-side right")
    }
    setIsLoginActive(!isLoginActive)
  }
  
  useEffect(() => {
    setRightSideClass("right-side right")
  },[])

  return(
    <div className="HomePage">
      <div className="login">
        <div className="container" ref={containerRef}>
          {isLoginActive && (<Login containerRef={containerRef}/>)}
          {!isLoginActive && (<SignUp containerRef={containerRef}/>)}
        </div>
        <RightSide classnames={rightSideClass} active={active}  onClick={changeState}/>
      </div>
    </div>
  )
}

export default HomePage;