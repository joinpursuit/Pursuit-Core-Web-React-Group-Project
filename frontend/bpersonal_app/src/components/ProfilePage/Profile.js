import React from "react";
import ProfilePictures from "./ProfilePictures";
import DisplayUserInfo from "../UniversalComponents/DisplayUserInfo";
import '../../css/profile.css'; 

function Profile() {
  return (
    <>
    <div className="profileInfo">
        <DisplayUserInfo />
    </div>
      <div className="profile">
        <ProfilePictures />
      </div>
    </>
  );
}

export default Profile;
