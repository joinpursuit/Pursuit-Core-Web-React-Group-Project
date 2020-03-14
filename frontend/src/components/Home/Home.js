import React, { useEffect, useState } from "react";
import "../../css/Home.css";
import HomeFeedPosts from "../Home/homeFeed";
import axios from "axios";

const Home = ({ user, error, searchValue, setSearchValue }) => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const get = async () => {
      let res;
      if (searchValue) {
        res = await axios.get("/api/posts?search=" + searchValue);
      } else {
        res = await axios.get("/api/posts");
      }
      setPosts(res.data.posts);
    };
    get();
  }, [searchValue]);

  return (
    <div className="homeContainer">
      <HomeFeedPosts posts={posts} home={true} />
      {error ? <p>Error</p> : null}
    </div>
  );
};
export default Home;
