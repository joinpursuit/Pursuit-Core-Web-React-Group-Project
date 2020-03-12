import React, { useState, useEffect } from "react";
import { useInput, useToggleShow } from "../../util/customHooks";
import axios from "axios";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const toggleInsertObj = useToggleShow(false);
  const commentInputObj = useInput("");
  const content = commentInputObj.value;

  const toggleEditBtnsObj = useToggleShow(false);

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

  const handleDeleteComment = async comment_id => {
    try {
      await axios.delete(`comments/${comment_id}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments(`/comments/post/${id}`);
  }, [comments, id]);

  let showComments = comments.map((comment, i) => {
    if (
      Number(sessionStorage.userID) === comment.author_id &&
      toggleEditBtnsObj.showInsert
    ) {
      return (
        <li key={i} style={{ listStyle: "none", border: "1px solid black" }}>
          <strong>{comment.username}</strong> commented '{comment.content}'
          {toggleEditBtnsObj.showInsert ? (
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVQ4T2NkQAL/GRj+MzIwMCKLobPR1cAV/2Rg+A9TzI7DEGxqwAZ8RtIMM4QXzRBcahjfYNEMM0QEagg+NWAXPMNjCL7wkGJgYISHwX0shvyB6mbBYooi1HUoIX4TzZCfUI3saAaoI4UPRpRdRjLkG1QjF5IBumiBi2HAGSQDvkA18iAZYILPgGNoXvgE1ciH5gUrbF7YjyUQP0I18mMJREfkQNyJIxo/QDUK4IhLd1A0bsaTBnyhtuBTAw7ENVgMCUELLFxq4LGwDMmQKByZCZsalGicz8DwP5FAdkZXAwAmkDau+YtyUwAAAABJRU5ErkJggg=="
              onClick={e => handleDeleteComment(comment.id)}
              alt="delete"
            />
          ) : null}
        </li>
      );
    } else {
      return (
        <li key={i} style={{ listStyle: "none", border: "1px solid black" }}>
          <strong>{comment.username}</strong> commented '{comment.content}'
        </li>
      );
    }
  });

  return (
    <>
      <button id="insertCommentBtn" onClick={toggleInsertObj.onClick}>
        Insert a Comment
      </button>
      <button onClick={toggleEditBtnsObj.onClick}>Edit comments</button>
      {toggleInsertObj.showInsert ? (
        <form name="insertCommentForm" onSubmit={handleInsertComment}>
          <input type="text" {...commentInputObj} required></input>
          <button type="submit">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjElEQVQ4T7WTsQ2AIBAAjy0cwVJHsHBuR9DSASzcQvMGCBCegEYbG++88I/h42Ne8pfjfhP09g+7UlgsEHix4ATkJKrAwZ0VbMCYqcgKUvgEqgtaYAmKClK4abIyxhUYmqjgYxF8LhBfKjmAWRlhFBtuYutBPqJ0lWv3wFfk7kLNJhYF7kzkrd0FL7gB894gBx/QYwgAAAAASUVORK5CYII="
              alt="enter"
            ></img>
          </button>
        </form>
      ) : null}
      <div className="comments">{showComments}</div>
    </>
  );
};

export default Comments;
