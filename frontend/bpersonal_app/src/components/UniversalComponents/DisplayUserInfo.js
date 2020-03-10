import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayUserInfo = () => {
  const [user, setUser] = useState({});

  const fetchData = async url => {
    try {
      let res = await axios.get(url);
      debugger;
      const { single_user } = res.data.body;
      setUser(single_user);
    } catch (error) {
      setUser({});
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData("users/1");
  }, []);

  return (
    <section id="displayUser">
      <img src={user.profile_pic_url}></img>
      <h1> {user.full_name} </h1>
      <h2>{user.username}</h2>
      <h2>{user.bio}</h2>
    </section>
  );
};

export default DisplayUserInfo;
