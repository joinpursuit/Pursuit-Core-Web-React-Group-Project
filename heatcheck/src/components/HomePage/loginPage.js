import React from "react"
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import TextInput from "./input.js"
const LoginForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello")
    e.reset()
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-mail" id ="loginEmail"/>
      <input type="password" name="password" placeholder={props.placeholder} required/>
      <AwesomeButton type="secondary" size="small">Submit</AwesomeButton>
    </form>
  )
}

export default LoginForm