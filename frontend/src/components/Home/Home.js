import React, { useEffect, useState } from "react";
import "../../css/Home.css";
import UserInfo from "../Profile/UserInfo";
import Posts from "../Profile/UserPosts";
import HomeFeedPosts from "../Home/homeFeed";
import axios from "axios";

const Home = ({ user, error }) => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const get = async () => {
      let res = await axios.get("/api/posts");
      setPosts(res.data.posts);
    };
    get();
  }, []);

  return (
    <div className="homeContainer">
      <HomeFeedPosts posts={posts} home={true} />
      {error ? <p>Error</p> : null}
    </div>
  );
};
export default Home;
