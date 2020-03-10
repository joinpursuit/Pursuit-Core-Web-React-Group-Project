import React, { useState, useEffect } from "react";
import DisplayFeedImages from "./DisplayFeedImages";
import axios from "axios";

const ProfilePictures = () => {
  // const [ userId, setUserID ] = useState("")
  const [images, setImgs] = useState([]);

  const fetchImgs = async url => {
    try {
<<<<<<< HEAD
      let res = await axios.get(url) 
      // debugger
      const { posts } = res.data.body
      // debugger
      setImgs(posts)
      
=======
      let res = await axios.get(url);
      const { posts } = res.data.body;
      // debugger
      setImgs(posts);
>>>>>>> ca6dec2b33decafd7905a461a9bbb08612cd09f5
    } catch (error) {
      setImgs([]);
    }
  };

  useEffect(() => {
    fetchImgs("http://localhost:3001/posts/ownerID/3");
  }, []);

  const showImages = images.map((img, i) => {
    console.log(img)
    return (
      <DisplayFeedImages img={img.post_image_url} key={i}/>
      )
    })
  
    return (
      <div className="newsFeed">
    {showImages}
    </div>
  )
}

export default ProfilePictures;
