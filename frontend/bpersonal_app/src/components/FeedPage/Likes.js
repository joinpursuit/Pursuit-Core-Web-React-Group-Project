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
<<<<<<< HEAD
  });
=======
  }, []);
>>>>>>> ca6dec2b33decafd7905a461a9bbb08612cd09f5

  return (
    <>
      Likes: <strong>{likes.length}</strong>
    </>
  );
};

export default Likes;
