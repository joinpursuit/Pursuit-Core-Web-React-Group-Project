import Posts from "./Feedpage/posts";
import Bio from "./Feedpage/bio";
// import "../../src/css/feedPage.css";
import React, { Component } from "react";
let url = "http://localhost:3001/posts/1";

const Userpage = () => {
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
      {/* </div> */}
      <div class="postContainer"> </div>
      <div class="footerContainer"> </div>
    </div>
  );
};

export default Userpage;
