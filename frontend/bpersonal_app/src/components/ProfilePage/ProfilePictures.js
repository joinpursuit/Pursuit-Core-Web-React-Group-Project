import React, { useState, useEffect } from "react";
import DisplayFeedImages from "./DisplayFeedImages";
import axios from "axios";

const ProfilePictures = () => {
  const [images, setImgs] = useState([]);

  const fetchImgs = async url => {
    try {
      let res = await axios.get(url);
      const { posts } = res.data.body;
      setImgs(posts);
    } catch (error) {
      setImgs([]);
    }
  };

  useEffect(() => {
    fetchImgs(`http://localhost:3001/posts/ownerID/${sessionStorage.userID}`);
  }, []);

  const showImages = images.map((img, i) => {
    return <DisplayFeedImages img={img.post_image_url} key={i}/>;
  });

  return <div className="newsFeed">{showImages}</div>;
};

export default ProfilePictures;
