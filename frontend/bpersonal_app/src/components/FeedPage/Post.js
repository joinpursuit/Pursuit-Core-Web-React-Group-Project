import React from "react";
import Comments from "./Comments";
import Hashtags from "./Hashtags";

const Post = ({
  id,
  profile_pic_url,
  username,
  timestamp,
  post_image_url,
  body
}) => {
  timestamp = new Date();
  const date = timestamp.toDateString();
  return (
    <div className="postContainer">
      <h1>
        {username} posted on {date}
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
      <div className="comments">
        <Comments id={id} />
      </div>
      <div className="hashtag">
        <Hashtags />
      </div>
    </div>
  );
};

export default Post;
