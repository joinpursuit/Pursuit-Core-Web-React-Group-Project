import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import "./../../css/Profile.css";
import axios from "axios";

const Profile = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const get = async () => {
      let res = await axios.get(`/api/users/${user.id}/posts`);

      setPosts(res.data.posts);
    };
    get();
  }, []);

  return (
    <div className="profileContainer">
      <UserInfo {...user} />
      <UserPosts posts={posts} home={false} />
    </div>
  );
};
export default Profile;
