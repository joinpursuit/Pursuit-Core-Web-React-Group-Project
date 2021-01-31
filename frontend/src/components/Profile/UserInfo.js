import React, { useState, useEffect } from 'react';
import '../../CSS/UserInfo.css';

const UserInfo = ({full_name, username, bio, website, profile_pic, favorite_artist, art_type}) => {

    profile_pic = profile_pic ? profile_pic : 'https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png'

    return (
        <div className="userInfo">
            <img src={profile_pic} alt="user" className="profilePic"/>
            <div className="userDetails">
                <div>
                    <p><span>Name:</span></p>
                    <p className="userDetailValue">{full_name}</p>
                </div>

                <div className="userDetail">
                    <p><span>Username:</span></p>
                    <p className="userDetailValue">{username}</p>
                </div>
                
                <div className="bio">
                    <p className="bioHeader">Bio:</p>
                    <p className="bioBody">{bio}</p>
                </div>

                <div className="userDetail">
                    <p><span>Favorite Artist:</span></p>
                    <p className="userDetailValue">{favorite_artist}</p>
                </div>


                <div className="userDetail">
                    <p><span>Genre:</span></p>
                    <p className="userDetailValue">{art_type}</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;