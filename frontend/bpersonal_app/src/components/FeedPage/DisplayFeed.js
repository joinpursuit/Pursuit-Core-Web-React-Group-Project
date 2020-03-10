import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const DisplayFeed = ({ user_id }) => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async url => {
    try {
      let res = await axios.get(url);
      const { posts } = res.data.body;

      setAllPosts(posts);
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
        id={post.id}
        user_id={user_id}
        profile_pic_url={post.profile_pic_url}
        username={post.username}
        timestamp={post.timestamp}
        post_image_url={post.post_image_url}
        body={post.body}
      />
    );
  });

  return <div className="postsContainer">{showPosts}</div>;
};

export default DisplayFeed;
