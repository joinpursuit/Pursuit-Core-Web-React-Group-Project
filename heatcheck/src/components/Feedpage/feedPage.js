import Posts from "./posts";
import Bio from "./bio";
import Reactions from "./reactions";
import TrendingReactions from "./trending";
import UploadPost from "./uploadPost";
import "../../css/feedpage.css";
import React, { Component, useEffect, useState, useRef } from "react";
import axios from "axios";
let url = "http://localhost:3001/posts";
// let currentUser = sessionStorage.UserID;

const FeedPage = () => {
  const [allposts, setallposts] = useState([]);
  // const didMount = useRef(false);

  const getAllposts = async () => {
    try {
      let res = await axios.get(url);
      setallposts(res.data.payload);
    } catch (error) {
      setallposts([]);
    }
  };

  useEffect(() => {
    getAllposts();
  }, []);

  return (
    <div class="parent">
      <div class="headerContainer"> </div>
      {/* <div class="contentWarp"> */}
      <div class="feedContainer">
        <Posts allposts={allposts} getAllposts={getAllposts} />
      </div>
      <div class="bioContainer">
        <Bio />
        <TrendingReactions />
      </div>
      {/* </div> */}
      <div class="postContainer">
        <UploadPost getAllposts={getAllposts} />
      </div>
      <div class="footerContainer"> </div>
    </div>
  );
};

export default FeedPage;
