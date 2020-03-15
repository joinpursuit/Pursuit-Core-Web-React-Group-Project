//comments
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useInput } from "../../util/customHooks";

const CommentForm = ({ postID, handleSubmit, newComment }) => {
  // const newComment = useInput("");

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   let body = newComment.value;

  //   let user_id = 1;
  //   try {
  //     let res = await axios.post(
  //       `http://localhost:3001/comments/${e.target.id}`,
  //       { body, user_id }
  //     );
  //     getcomments(e.target.id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  console.log(newComment);
  return (
    <>
      <form onSubmit={e => handleSubmit()} id={postID}>
        <input type="text" {...newComment} />
        <input type="submit" value="post" id={postID} />
      </form>
    </>
  );
};

export default CommentForm;
