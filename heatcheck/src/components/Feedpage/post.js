import React, { useEffect, useState, useRef } from "react";
import Comments from "./comment";
import Reactions from "./reactions";
import axios from "axios";
let currentUserID = 1;
const styles = {
  img: {
    height: "350px",
    width: "350px",
    // borderRadius: "5%",
    objectFit: "cover"
  },
  "#profilepic": {
    // display: "flex",
    // alignSelf: "baseline",
    height: "25px",
    width: "25px",
    borderRadius: "50%"
  },
  "#userName": {
    width: "200px",
    textAlign: "center",
    fontWeight: "bolder"
  },
  "#user": {
    display: "flex"
  },
  ".post": {
    border: "2px solid",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    marginBottom: "10px"
  },
  "#userPost": {
    display: "flex",
    alignItems: "center"
  }
};

const Post = ({
  shoeImg,
  profilepic,
  userName,
  brand,
  description,
  release,
  postID,
  reaction,
  reactor,
  user_id,
  comments
}) => {
  const [showComments, setshowComments] = useState(false);

  const displayPost = () => {
    // let brand = brand.toUpperCase();
    return (
      <>
        <div id="userPost" style={styles["#userPost"]}>
          <img src={profilepic} id="profilepic" style={styles["#profilepic"]} />
          <p id="userName" style={styles["#userName"]}>
            {userName}
          </p>
          {user_id === currentUserID ? (
            <button id={postID} onClick={handleDelete}>
              ❌
            </button>
          ) : null}
        </div>
        <img src={shoeImg} alt={""} style={styles.img} />
        <br></br>
        <Reactions id={postID} />
        <p>
          Brand: {brand} Release: {release}
        </p>
        <p>
          {userName}:{description}
        </p>
      </>
    );
  };
  const showModal = e => {
    if (showComments === false) {
      setshowComments(true);
    } else {
      setshowComments(false);
    }
  };

  const handleDelete = async e => {
    e.preventDefault();
    let id = e.target.id;
    try {
      let res = await axios.delete(`http://localhost:3001/posts/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(showComments);
  return (
    <>
      <div className="post" id={postID} style={styles[".post"]}>
        {displayPost({})}

        <button
          onClick={e => {
            showModal();
          }}
        >
          show all {comments.length} comments
        </button>
        <br></br>
        {showComments ? <Comments postID={postID} /> : null}

        <br></br>
      </div>
    </>
  );
};

export default Post;
