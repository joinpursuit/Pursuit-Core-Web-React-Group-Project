import React from "react";

const Post = ({ owner_id, post_image_url, body }) => {
  return (
    <div>
      Owner_id: {owner_id}
      <img src={post_image_url} alt={""}></img>
      <p>{body}</p>
    </div>
  );
};

export default Post;
