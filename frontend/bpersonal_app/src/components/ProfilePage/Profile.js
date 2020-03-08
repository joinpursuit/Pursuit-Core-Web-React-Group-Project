import React from "react";
import ProfilePictures from "./ProfilePictures";
import DisplayUserInfo from "../UniversalComponents/DisplayUserInfo";

function Profile() {
  return (
    <>
      <div className="profile">
        <DisplayUserInfo />
        <ProfilePictures />
      </div>

      <div className="bio_and_buttons"></div>
    </>
  );
}

export default Profile;
