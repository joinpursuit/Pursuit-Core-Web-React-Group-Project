import React from "react";
import "./css/Post.css";
import Likes from "./Likes";
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
      <div id="profile_pic">
        <img
          src={profile_pic_url}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "100%" }}
        ></img>
      </div>
      <h1>
        {username} posted on {date}
        <br></br>
      </h1>
      <div id="post_image">
        <img
          src={post_image_url}
          alt=""
          style={{ width: "400", height: "500px" }}
        ></img>
      </div>
      <div className="likes">
        <Likes id={id} />
      </div>
      <p>{body}</p>
      <div className="hashtag">
        <Hashtags id={id} />
      </div>
      <div className="comments">
        <Comments id={id} />
      </div>
    </div>
  );
};

export default Post;
