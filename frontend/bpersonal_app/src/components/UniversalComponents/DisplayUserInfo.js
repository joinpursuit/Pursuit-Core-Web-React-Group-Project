import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayUserInfo = () => {
  const [user, setUser] = useState({});
  const [editBoolean, setEditBoolean] = useState(false);

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

  // const handleClick = () => {
  //     if (editBoolean){
  //         // style.display of the form "block"
  //     } else {
  //         // style.display of the form "none"
  //     }
  // }

  useEffect(() => {
    fetchData("users/1");
  }, []);

  return (
    <section id="displayUser">
      <img
        src={user.profile_pic_url}
        style={{ width: "300px", height: "300px", borderRadius: "100%" }}
      ></img>
      <h1> {user.full_name} :</h1>
      <h2>{user.username}</h2>
      <h2>{user.bio}</h2>
      <h2>{user.email}</h2>
      <form id="updateBio">
        <input id="name" type="text" />
        <input id="userName" type="text" />
        <input id="email" type="text" />
        <input id="bio" type="text" />
      </form>
      <button onClick={handleCLick}>Edit Profile</button>
    </section>
  );
};

export default DisplayUserInfo;
