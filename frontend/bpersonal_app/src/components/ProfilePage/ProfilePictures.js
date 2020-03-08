import React, { useState, useEffect } from "react";
import DisplayFeedImages from './DisplayFeedImages'
import axios from 'axios'

const ProfilePictures = () => {
  // const [ userId, setUserID ] = useState("")
  const [ Imgs, setImgs ] = useState([])

  const fetchImgs = async (url) => {
    try {
      let res = await axios.get(url) 
      // debugger
      const { posts } = res.data.body
      setImgs(posts.map(post => {
        let postImg = post.post_image_url
        return postImg
      }))
      
    } catch (error) {
      setImgs([])    
    }
  }
  
  useEffect(() => {
    fetchImgs("http://localhost:3001/posts/ownerID/1")
}, [])


  return (
    <div>
    {Imgs}
    </div>
  )
}

export default ProfilePictures;