import React, { useState, useEffect } from "react";
// import DisplayUserInfo from "../UniversalComponents/DisplayUserInfo";
import DisplayFeed from "./DisplayFeed";
import CreatePostForm from "./CreatePostForm";

const Feed = () => {
  const [userID, setUserID] = useState("");

  const handleSessionStorageUserID = () => {
    setUserID(sessionStorage.userID);
  };

  useEffect(() => {
    handleSessionStorageUserID();
  }, []);

  return (
    <div className="Feed">
      {/* <DisplayUserInfo /> */}
      <CreatePostForm user_id={userID} />
      <br></br>
      <DisplayFeed user_id={userID} />
    </div>
  );
};

export default Feed;
