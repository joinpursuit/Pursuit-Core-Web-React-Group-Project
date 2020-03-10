import React, { useState, useEffect } from "react";
import { useInput, useToggleShow } from "../../util/customHooks";
import axios from "axios";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const toggleInsertObj = useToggleShow(false);
  const commentInputObj = useInput("");
  const content = commentInputObj.value;

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

  const handleInsertComment = async e => {
    e.preventDefault();
    await axios.post(`comments/post/${id}/${sessionStorage.userID}`, {
      content
    });
  };

  useEffect(() => {
    fetchComments(`/comments/post/${id}`);
  }, [comments]);

  let showComments = comments.map((comment, i) => {
    return (
      <li key={i} style={{ listStyle: "none", border: "1px solid black" }}>
        <strong>{comment.username}</strong> commented '{comment.content}'
      </li>
    );
  });

  return (
    <>
      <button id="insertCommentBtn" onClick={toggleInsertObj.onClick}>
        Insert a Comment
      </button>
      {toggleInsertObj.showInsert ? (
        <form name="insertCommentForm" onSubmit={handleInsertComment}>
          <input type="text" {...commentInputObj}></input>
          <button>Comment!</button>
        </form>
      ) : null}
      <div className="comments">{showComments}</div>
    </>
  );
};

export default Comments;
