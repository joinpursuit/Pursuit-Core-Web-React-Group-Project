import React, { useState, useEffect } from "react";
import axios from "axios";

const Likes = ({ id }) => {
  const [likes, setLikes] = useState([]);

  const fetchLikes = async url => {
    try {
      let res = await axios.get(url);
      const { result } = res.data.body;
      setLikes(result);
    } catch (error) {
      console.log(error);
      setLikes([]);
    }
  };

  useEffect(() => {
    fetchLikes(`/likes/post/${id}`);
  });

  return <>Likes: {likes.length}</>;
};

export default Likes;
