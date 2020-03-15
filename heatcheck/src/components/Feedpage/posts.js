import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Post from "./post";

const Posts = ({ allposts, getAllposts }) => {
  // const [allposts, setallposts] = useState([]);
  // // const didMount = useRef(false);

  // const getAllposts = async () => {
  //   try {
  //     let res = await axios.get(url);
  //     setallposts(res.data.payload);
  //   } catch (error) {
  //     setallposts([]);
  //   }
  // };

  // useEffect(() => {

  // }, []);

  let allpost = allposts.map(post => {
    return (
      <Post
        postID={post.id}
        user_id={post.user_id}
        userName={post.user_name["0"]}
        shoeImg={post.image}
        key={post.id}
        brand={post.brand}
        description={post.description}
        release={post.release_date}
        comments={post.comment}
        commenterID={post.commenter}
        profilepic={post.profilepic["0"]}
        reaction={post.reaction}
        reaction={post.reactor}
        colorway={post.colorway}
        tag={post.tag}
        getAllposts={getAllposts}
      />
    );
  });
  return <div>{allpost}</div>;
};

export default Posts;
