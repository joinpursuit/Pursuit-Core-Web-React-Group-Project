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

  const posts = [
    {
      poster: user.username,
      picture: "https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg",
      caption: "The ocean is blue",
      tags: [{tag: "Ocean"}, {tag: "Water"}]
    },
    {
      poster: user.username,
      picture: "https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg",
      caption: "The ocean is green",
      tags: [{tag: "Ocean"}, {tag: "Water"}, {tag: "Green"}]
    }
  ]

  return(
    <div className="profileContainer">
      <UserInfo {...user}/>
      <UserPosts posts={posts}/>
    </div>
  )
}
 export default Profile
