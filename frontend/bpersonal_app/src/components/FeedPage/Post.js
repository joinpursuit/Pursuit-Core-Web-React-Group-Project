import React from "react";

const Post = ({ full_name, timestamp, post_image_url, body }) => {
  timestamp = new Date();
  const date = timestamp.toDateString();
  return (
    <div>
      <h1>
        {full_name} posted on {date}
      </h1>
      <img src={post_image_url} alt={""}></img>
      <p>{body}</p>
    </div>
  );
};

export default Post;
