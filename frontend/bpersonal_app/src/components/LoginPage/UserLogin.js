import React, { useState } from 'react'
import axios from 'axios'


const UserLogin = () => {
   const handleLogin = async (e) => {
       e.preventDefault();
       debugger
       let res = await axios.get(`http://localhost:3001/users/`)
   }

};

export default UserLogin


