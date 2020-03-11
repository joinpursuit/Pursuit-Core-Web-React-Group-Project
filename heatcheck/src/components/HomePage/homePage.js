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
  const [current, setCurrent] = useState()
  const [container, setContainer] = useState()
  const [rightSide, setRightSide] = useState()
  const active = isLoginActive ? "Sign Up" : "Login"
  const containerRef = useRef()

  const changeState = () => {
    if(isLoginActive){
      rightSide.classList.remove("right")
      rightSide.classList.add("left")
    } else {
      rightSide.classList.remove("left")
      rightSide.classList.add("right")
    }
    setIsLoginActive(!isLoginActive)
  }

  useEffect(() => {
    setRightSide("right")
  },[])

  return(
    <div className="HomePage">
      <div className="login">
        <div className="container" ref={(ref) => {
          setContainer(ref) 
        return container} }>
          {isLoginActive && (<Login containerRef={(ref) => {
            setCurrent(ref)
            return current}}/>)}
          {!isLoginActive && (<SignUp containerRef={(ref) => {
            setCurrent(ref)
            return current}}/>)}
        </div>
        <RightSide active={active} containerRef={(ref) => {
          setRightSide(ref)
          return rightSide}} onClick={changeState()}/>
      </div>
    </div>
  )
}

export default HomePage;