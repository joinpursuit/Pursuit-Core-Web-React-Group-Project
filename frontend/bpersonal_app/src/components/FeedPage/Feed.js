import React, { useState, useEffect } from "react";
// import DisplayUserInfo from "../UniversalComponents/DisplayUserInfo";
import DisplayFeed from "./DisplayFeed";
import CreatePostForm from "./CreatePostForm";

const Feed = () => {
  const [userID, setUserID] = useState("");

  // const handleSessionStorageUserID = () => {
  //   setUserID(sessionStorage.userID);
  // };

  // useEffect(() => {
  // handleSessionStorageUserID();
  // }, []);

  return (
    <div className="Feed">
      {/* <DisplayUserInfo /> */}
      HELLO <br />
      HELLO <br />
      HELLO <br />
      <CreatePostForm />
      <br></br>
      <DisplayFeed />
    </div>
  );
};

export default Feed;
