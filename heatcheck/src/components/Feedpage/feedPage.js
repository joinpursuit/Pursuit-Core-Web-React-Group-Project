import Posts from "./posts";
import Bio from "./bio";
import "../../css/feedpage.css";
import React, { Component } from "react";

class FeedPage extends Component {
  render() {
    return (
      <div class="parent">
        <div class="headerContainer"> </div>
        {/* <div class="contentWarp"> */}
        <div class="feedContainer">
          <Posts />
        </div>
        <div class="bioContainer">
          <Bio />
        </div>
        {/* </div> */}
        <div class="postContainer"> </div>
        <div class="footerContainer"> </div>
      </div>
    );
  }
}

export default FeedPage;
