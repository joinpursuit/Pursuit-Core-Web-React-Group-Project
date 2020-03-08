import React from "react";
import Comments from "./comment";
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
  comments,
  commentersID
}) => {
  const displayPost = () => {
    return (
      <>
        <div className="post" id={postID} style={styles[".post"]}>
          <div>
            <img
              src={profilepic}
              id="profilepic"
              style={styles["#profilepic"]}
            />
            <p id="userName" style={styles["#userName"]}>
              {userName}
            </p>
          </div>

          <img src={shoeImg} alt={""} style={styles.img} />
          <p>🔥❄️4</p>

          <p>
            Brand: {brand} Release: {release}
          </p>
          <p>
            {userName}:{description}
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      {displayPost({
        shoeImg,
        profilepic,
        userName,
        brand,
        description,
        release
      })}
      <Comments />
    </>
  );
};

export default Post;
