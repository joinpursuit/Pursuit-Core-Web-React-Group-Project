import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInput, useToggleShow } from "../../util/customHooks";

const DisplayUserInfo = () => {
  const [user, setUser] = useState({});
  const toggleEditProfile = useToggleShow(false);
  const userNameObj = useInput("");
  const fullNameObj = useInput("");
  const bioObj = useInput("");
  const emailObj = useInput("");
  const userNameInput = userNameObj.value;
  const fullName = fullNameObj.value;
  const bio = bioObj.value;
  const email = emailObj.value;

  const fetchData = async url => {
    try {
      let res = await axios.get(url);
      //   debugger;
      const { single_user } = res.data.body;
      setUser(single_user);
    } catch (error) {
      setUser({});
      console.log(error);
    }
  };

  const handleUpdateProfile = async e => {
    e.preventDefault();
    await axios.patch(`/users/${sessionStorage.userID}`, {
      username: userNameInput,
      full_name: fullName,
      bio: bio,
      email_address: email
    });
  };

  useEffect(() => {
    fetchData(`/users/${sessionStorage.userID}`);
  }, []);

  return (
    <section id="displayUser">
      <img
        src={user.profile_pic_url}
        style={{ width: "300px", height: "300px", borderRadius: "100%" }}
        alt="profile_pic"
      ></img>
      <h1>{user.username}:</h1>
      <h2> {user.full_name}</h2>
      <h2>{user.bio}</h2>
      <h2>{user.email}</h2>
      <button id="editProfileButton" onClick={toggleEditProfile.onClick}>
        Edit Profile
      </button>

      {toggleEditProfile.showInsert ? (
        <form id="updateBio" onSubmit={handleUpdateProfile}>
          <input
            name={"full_name"}
            {...fullNameObj}
            type="text"
            placeholder="name"
          />
          <input
            name={"userName"}
            {...userNameObj}
            type="text"
            placeholder="username"
          />
          <input name={"email"} {...emailObj} type="text" placeholder="email" />
          <input name={"bio"} {...bioObj} type="text" placeholder="bio" />
          <button type="submit">Edit Profile</button>
        </form>
      ) : null}
    </section>
  );
};

export default DisplayUserInfo;
