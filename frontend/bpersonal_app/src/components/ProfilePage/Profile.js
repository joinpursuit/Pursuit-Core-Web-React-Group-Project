import React from 'react'
import ProfilePictures from './ProfilePictures'
import DisplayUserInfo from "../UniversalComponents/DisplayUserInfo";

function Profile() {
<<<<<<< HEAD
    return <div className="profile">
    <div className="uploadForm">

    </div>

    <div className="feed">
    <ProfilePictures/>
    </div>

    <div id="displayUser">
        <DisplayUserInfo/>
    </div>

    <div className="bio_and_buttons">

    </div>
    </div>
=======
  return (
    <>
      <div className="profile">
        <DisplayUserInfo />
        <ProfilePictures />
      </div>
      <div className="bio_and_buttons"></div>
    </>
  );
>>>>>>> ca6dec2b33decafd7905a461a9bbb08612cd09f5
}

export default Profile;
