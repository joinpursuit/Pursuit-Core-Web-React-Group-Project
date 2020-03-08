import React, { useState, useEffect } from 'react';
import '../../UserInfo.css';

const UserInfo = ({full_name, username, bio, website, profile_pic, favorite_artist, art_type}) => {

    profile_pic = profile_pic ? profile_pic : 'https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png'

    return (
        <div className="userInfo">
            <img src={profile_pic} alt="user" className="profilePic"/>
            <div className="userDetails">
                <p className="userDetail"><span>Name</span>: {full_name}</p>
                <p className="userDetail"><span>Username</span>: {username}</p>
                <div className="bio">
                    <h1 className="bioHeader">Bio:</h1>
                    <p className="bioBody">{bio}</p>
                </div>
                <p className="userDetail"><span>Favorite Artist</span>: {favorite_artist}</p>
                <p className="userDetail"><span>Genre</span>: {art_type}</p>
            </div>
        </div>
    )
}

export default UserInfo;