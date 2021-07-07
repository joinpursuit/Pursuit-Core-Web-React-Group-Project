import Posts from "./posts";
import Bio from "./bio";
import Reactions from "./reactions";
import "../../css/feedpage.css";
import React, { Component } from "react";
let url = "http://localhost:3001/posts";

const FeedPage = () => {
  return (
    <div class="parent">
      <div class="headerContainer"> </div>
      {/* <div class="contentWarp"> */}
      <div class="feedContainer">
        <Posts url={url} />
      </div>
      <div class="bioContainer">
        <Bio />
      </div>
      <Reactions />
      {/* </div> */}
      <div class="postContainer"> </div>
      <div class="footerContainer"> </div>
    </div>
  );
};

export default FeedPage;
