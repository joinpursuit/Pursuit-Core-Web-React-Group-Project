import React, { useState, useEffect } from "react";
import axios from 'axios'
import DisplayFeedImages from './DisplayFeedImages'



const DisplayProfile = () => {
  // const [ userId, setUserID ] = useState("")

  const [ imgs, setImgs ] = useState([])

  const fetchImgs = async (url) => {
    try {
      let res = await axios.get(url) 
      debugger

    } catch (error) {
      setImgs([])    
    }
}

useEffect(() => {

  fetchImgs("/posts/ownerID/1")

}, [])

  return (
    <div className={"Profile"}>

      <div className={"UploadForm"}>
      </div>

      <div className={"DisplayUserInfo"}>

      </div>
      <div className={"FeedImgs"}>
        
      </div>
    </div>
  )
}
export default DisplayProfile;