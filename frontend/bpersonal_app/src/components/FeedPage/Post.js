import React from "react";

const Post = ({ owner_id, post_image_url, body }) => {
  debugger;
  return (
    <div>
      Owner_id: {owner_id}
      <img
        src={post_image_url}
        alt={""}
        style={{ height: "300px", width: "600px" }}
      ></img>
      <p>{body}</p>
    </div>
  );
};

export default Post;
