//comments
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
let user_id = 1;

const Comments = ({ postID }) => {
  const [allPostComments, setallPostComments] = useState([]);

  const getcomments = async postID => {
    let ID = postID.postID;
    const url = `http://localhost:3001/comments/${ID}`;

    try {
      let res = await axios.get(url);
      setallPostComments(res.data.payload);
    } catch (error) {
      setallPostComments([]);
    }
  };
  useEffect(() => {
    getcomments({ postID });
  }, []);

  const handleDelete = async e => {
    e.preventDefault();
    let commentid = e.target.id;
    const url = `http://localhost:3001/comments/${commentid}`;

    try {
      let res = await axios.delete(url);
      getcomments({ postID });
    } catch (error) {
      setallPostComments([]);
    }
  };

  const displaycomments = () => {
    let comments = allPostComments.map(comment => {
      if (user_id === comment.user_id) {
        return (
          <li id={comment.id} key={comment.id}>
            {comment.user_name[0]}: {comment.body}
            <button>edit</button>
            <button
              id={comment.id}
              onClick={e => {
                handleDelete(e);
              }}
            >
              delete
            </button>
          </li>
        );
      } else {
        return (
          <li key={comment.id}>
            {comment.user_name[0]}: {comment.body}
          </li>
        );
      }
    });
    return comments;
  };

  return (
    <>
      <p>comments</p>
      <ul>{displaycomments()} </ul>
      <CommentForm postID={postID} />
    </>
  );
};

export default Comments;
