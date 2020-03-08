import React from "react";

const Post = ({
  profile_pic_url,
  full_name,
  timestamp,
  post_image_url,
  body
}) => {
  timestamp = new Date();
  const date = timestamp.toDateString();
  return (
    <div>
      <h1>
        {full_name} posted on {date}
        <br></br>
        <img
          src={profile_pic_url}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "100%" }}
        ></img>
      </h1>
      <img
        src={post_image_url}
        alt=""
        style={{ width: "400", height: "500px" }}
      ></img>
      <p>{body}</p>
    </div>
  );
};

export default Post;
