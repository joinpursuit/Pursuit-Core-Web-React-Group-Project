import React from 'react'
import ProfilePictures from './ProfilePictures'
import DisplayUserInfo from "../UniversalComponents/DisplayUserInfo";

function Profile() {
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
}

export default Profile;
