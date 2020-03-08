//comments
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";

const Comments = ({ postID }) => {
  const [allPostComments, setallPostComments] = useState([]);

  const getcomments = async postID => {
    let ID = postID.postID;
    const url = `http://localhost:3001/comments/${ID}`;

    try {
      let res = await axios.get(url);
      setallPostComments(res.data.payload);
      debugger;
    } catch (error) {
      setallPostComments([]);
    }
  };
  useEffect(() => {
    getcomments({ postID });
  }, []);

  let allComments = allPostComments.map(comments => {
    return <p>{comments.body}</p>;
  });

  return (
    <>
      {allComments}
      <CommentForm />
    </>
  );
};

export default Comments;
