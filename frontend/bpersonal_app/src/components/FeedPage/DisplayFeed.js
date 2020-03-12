import React from "react";
import Post from "./Post";

const DisplayFeed = ({ allPosts }) => {
  const showPosts = allPosts.map((post, i) => {
    return (
      <Post
        key={i}
        id={post.id}
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
