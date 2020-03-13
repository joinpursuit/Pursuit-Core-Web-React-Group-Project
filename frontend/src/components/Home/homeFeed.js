import React, { useState, useEffect } from "react";
import Post from "../General/Post";

const HomeFeedPosts = ({ posts, home }) => {
  console.log(posts, "yerrr");

  const postList = posts.map((post, i) => {
    return (
      <Post
        poster={post.username}
        picture={post.picture}
        caption={post.caption}
        tags={post.tags}
        key={i}
      />
    );
  });
  return (
    <div className="postFeed">
      <h1 className="postHeader">{home ? "News Feed" : "Posts"}</h1>
      {postList}
    </div>
  );
};

export default HomeFeedPosts;
