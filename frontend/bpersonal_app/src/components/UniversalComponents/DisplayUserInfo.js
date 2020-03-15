import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInput, useToggleShow } from "../../util/customHooks";
import Upload from "./Upload";

const DisplayUserInfo = () => {
  const [user, setUser] = useState({});
  const toggleEditProfile = useToggleShow(false);
  const fullNameObj = useInput("");
  const bioObj = useInput("");
  const emailObj = useInput("");
  const fullName = fullNameObj.value;
  const bio = bioObj.value;
  const email = emailObj.value;

  const toggleEditPicture = useToggleShow(false);
  const [path, setPath] = useState("");

  const fetchData = async url => {
    try {
      let res = await axios.get(url);
      const { single_user } = res.data.body;
      setUser(single_user);
    } catch (error) {
      setUser({});
      // console.log(error);
    }
  };

  const handleUpdateProfile = async e => {
    e.preventDefault();
    await axios.patch(`/users/${sessionStorage.userID}`, {
      full_name: fullName,
      bio: bio,
      email_address: email
    });
    fetchData(`/users/${sessionStorage.userID}`);
  };

  const editProfilePicture = async () => {
    if (path) {
      try {
        await axios.patch(`/users/profile_pic/${sessionStorage.userID}`, {
          profile_pic_url: path
        });
        fetchData(`/users/${sessionStorage.userID}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please upload a valid image before updating");
    }
  };

  useEffect(() => {
    fetchData(`/users/${sessionStorage.userID}`);
  }, []);

  return (
    <section id="displayUser">
      <div id="profilePicture">
        <div className="profilePictureEditContainer">
          <img
            id="profilePictureImg"
            src={user.profile_pic_url}
            style={{ width: "300px", height: "300px", borderRadius: "100%" }}
            alt="profile_pic"
            onClick={toggleEditPicture.onClick}
          ></img>
          <span className="profilePictureEditText">Edit Profile Picture</span>
        </div>
        {toggleEditPicture.showInsert ? (
          <>
            <br></br>
            <Upload cb={setPath} />
            <button id="editProfilePictureBtn" onClick={editProfilePicture}>
              Update Profile Picture
            </button>
          </>
        ) : null}
      </div>

      <div id="displayUserInfo">
        <h1>{user.username}</h1>
        <h2> {user.full_name}</h2>
        <h2>{user.bio}</h2>
        <h2>{user.email_address}</h2>
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
              name={"email"}
              {...emailObj}
              type="text"
              placeholder="email"
            />
            <input name={"bio"} {...bioObj} type="text" placeholder="bio" />
            <button type="submit">Update</button>
          </form>
        ) : null}
      </div>
    </section>
  );
};

export default DisplayUserInfo;
