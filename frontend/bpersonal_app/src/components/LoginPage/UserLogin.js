import React, { useState } from 'react'
import axios from 'axios'


const UserLogin = () => {

   const fetchID = async (e) => {
       e.preventDefault();
       debugger
       let res = await axios.get(`http://localhost:3001/users/search/`)
   }

};

export default UserLogin


