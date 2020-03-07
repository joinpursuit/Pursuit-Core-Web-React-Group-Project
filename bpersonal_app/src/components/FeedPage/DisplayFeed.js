import React, { useState } from "react";
import Post from "./Post";

const DisplayFeed = () => {
  const [userID, setUserID] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = () => {};

  //   const showPosts = allPosts.map(post => {});

  return <div className="postsContainer"></div>;
};

export default DisplayFeed;
