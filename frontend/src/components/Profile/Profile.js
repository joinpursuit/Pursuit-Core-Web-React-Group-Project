import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import './../../css/Profile.css';

const Profile = () => {
  const user = {
    full_name: "Isaiah Collazo",
    username: "theycallme_zay",
    bio: "Aspiring game designer, and film editor",
    favorite_artist: "Damien Chazelle",
    art_type: "Game Design"
  }

  return(
    <div className="profileContainer">
      <UserInfo {...user}/>
      <UserPosts/>
    </div>
  )
}
 export default Profile
