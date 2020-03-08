import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import LoginForm from "./loginPage.js"
import TextInput from "./input.js"
import 'react-awesome-button/dist/themes/theme-red.css'

const Login = () => {
  const [showForm, setShowForm] = useState(false)

  return(
    <div>
    <AwesomeButton size="large" type="primary" onPress={()=>setShowForm(!showForm)}>Login</AwesomeButton> 
      {/* {showForm ? <LoginForm placeholder="salmon"/> : null} */}
      <TextInput/>
    </div>
  )
}

export default Login

