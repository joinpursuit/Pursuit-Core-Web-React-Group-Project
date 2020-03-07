import React, { useState } from "react";
// import DisplayUserInfo from "../UniversalComponents/DisplayUserInfo";
import DisplayFeed from "./DisplayFeed";
import CreatePostForm from "./CreatePostForm";

function Feed() {
  const [userID, setUserID] = useState("");

  const handleSessionStorageUserID = () => {
    setUserID(sessionStorage.userID);
  };

  return (
    <div className="Feed">
      {/* <DisplayUserInfo /> */}
      <CreatePostForm handleSessionStorageUserID={handleSessionStorageUserID} />
      <br></br>
      <DisplayFeed handleSessionStorageUserID={handleSessionStorageUserID} />
    </div>
  );
}

export default Feed;
