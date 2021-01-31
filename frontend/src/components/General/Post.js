import React from "react";
import Tag from "./Tag";
import "../../CSS/Post.css";

const Post = ({ poster, picture, caption, tags }) => {
  let tagsList = tags.map((tag, i) => {
    return <Tag tagName={tag} key={i} />;
  });

  return (
    <div className="postContainer">
      <p className="poster">{poster}</p>
      <img src={picture} alt={caption} className="postImage" />
      <p className="caption">{caption}</p>
      <div className="tags">{tagsList}</div>
    </div>
  );
};

export default Post;
