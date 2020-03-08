import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Post from "./post";

const Posts = () => {
  const [allposts, setallposts] = useState([]);
  // const didMount = useRef(false);

  const getAllposts = async () => {
    const url = "http://localhost:3001/posts";

    try {
      let res = await axios.get(url);
      setallposts(res.data.payload);
      debugger;
    } catch (error) {
      setallposts([]);
    }
  };

  useEffect(() => {
    getAllposts();
  }, []);

  let allpost = allposts.map(post => {
    return (
      <Post
        userName={post.user_name["0"]}
        shoeImg={post.image}
        key={post.id}
        brand={post.brand}
        description={post.description}
        release={post.release_date}
        comments={post.comments}
        profilepic={post.profilepic["0"]}
        commenter={post.commenter["0"]}
        reaction={post.reactor["0"]}
      />
    );
  });
  return <div>{allpost}</div>;
};

export default Posts;
