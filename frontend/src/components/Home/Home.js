import React, { useEffect, useState } from "react";
import "../../css/Home.css";
import UserInfo from "../Profile/UserInfo";
import Posts from "../Profile/UserPosts";
import HomeFeedPosts from "../Home/homeFeed";
import axios from "axios";

const Home = ({ user, error }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const get = async () => {
      let res = await axios.get("/api/posts");

      setPosts(res.data.posts);
    };
    get();
    // debugger;
  }, []);

  user = {
    full_name: "Isaiah Collazo",
    username: "theycallme_zay",
    bio: "Aspiring game designer, and film editor",
    favorite_artist: "Damien Chazelle",
    art_type: "Game Design"
  };

  // const posts = [
  //   {
  //     poster: user.username,
  //     picture:
  //       "https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg",
  //     caption: "The ocean is blue",
  //     tags: [{ tag: "Ocean" }, { tag: "Water" }]
  //   },
  //   {
  //     poster: user.username,
  //     picture:
  //       "https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg",
  //     caption: "The ocean is green",
  //     tags: [{ tag: "Ocean" }, { tag: "Water" }, { tag: "Green" }]
  //   }
  // ];

  return (
    <div className="homeContainer">
      {console.log(posts)}
      {/* <Posts posts={posts} home={true} /> */}
      <HomeFeedPosts posts={posts} home={true} />
      {/* add all posts to feed */}
      {error ? <p>Error</p> : null}
    </div>
  );
};
export default Home;
