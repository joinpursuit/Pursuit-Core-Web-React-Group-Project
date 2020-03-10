import React, { useEffect, useState, useRef } from "react";
import Comments from "./comment";
import Reactions from "./reactions";
const styles = {
  img: {
    height: "200px",
    width: "200px"
  },
  "#profilepic": {
    height: "20px",
    width: "20px",
    borderRadius: "50%"
  },
  "#userName": {
    width: "200px"
  },
  "#user": {
    display: "flex"
  },
  ".post": {
    border: "2px solid",
    borderRadius: "12px",
    width: "500px",
    textAlign: "center"
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
  reactor
}) => {
  const [showComments, setshowComments] = useState(false);

  const displayPost = () => {
    // let brand = brand.toUpperCase();
    return (
      <>
        <div>
          <img src={profilepic} id="profilepic" style={styles["#profilepic"]} />
          <p id="userName" style={styles["#userName"]}>
            {userName}
          </p>
        </div>

        <img src={shoeImg} alt={""} style={styles.img} />

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
    setshowComments(true);
  };
  console.log(showComments);
  return (
    <>
      <div className="post" id={postID} style={styles[".post"]}>
        {displayPost({
          shoeImg,
          profilepic,
          userName,
          brand,
          description,
          release
        })}
        <Reactions reaction={reaction} reaction={reactor} />
        <button
          onClick={e => {
            showModal();
          }}
        >
          show all comments
        </button>
        <Comments postID={postID} />
        <br></br>
      </div>
    </>
  );
};

export default Post;
