import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async url => {
    try {
      let res = await axios.get(url);
      const { comments } = res.data.body;
      setComments(comments);
    } catch (error) {
      console.log(error);
      setComments([]);
    }
  };

  useEffect(() => {
    fetchComments(`/comments/post/${id}`);
  });

  let showComments = comments.map((comment, i) => {
    return (
      <li key={i} style={{ listStyle: "none", border: "1px solid black" }}>
        <strong>{comment.username}</strong> commented '{comment.content}'
      </li>
    );
  });

  return <>{showComments}</>;
};

export default Comments;
