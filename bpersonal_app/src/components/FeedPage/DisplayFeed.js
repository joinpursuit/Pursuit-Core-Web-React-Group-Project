import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const DisplayFeed = () => {
  //   const [userID, setUserID] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async url => {
    try {
      let res = await axios.get(url);
      debugger;
      setAllPosts(res.data.body.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPosts("/posts");
  }, []);

  const showPosts = allPosts.map((post, i) => {
    return (
      <Post
        key={i}
        owner_id={post.owner_id}
        post_image_url={post.post_image_url}
        body={post.body}
      />
    );
  });

  return <div className="postsContainer">{showPosts}</div>;
};

export default DisplayFeed;
