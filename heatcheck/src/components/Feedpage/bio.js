import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Post from "./post";
let id = 1;
const styles = {
  img: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    border: " 5px solid red"
  }
};

const Bio = () => {
  const [currentUser, setcurrentUser] = useState([]);
  // const didMount = useRef(false);

  const getcurrentUser = async () => {
    const url = `http://localhost:3001/users/1`;
    debugger;
    try {
      let res = await axios.get(url);
      //   let user = res.data.message;
      setcurrentUser(res.data.message);
      debugger;
    } catch (error) {
      setcurrentUser([]);
    }
  };

  useEffect(() => {
    getcurrentUser();
  }, []);

  const userBio = () => {
    console.log("hi" + currentUser);
    return (
      <div>
        <img src="https://i.imgur.com/cMy8V5j.png" style={styles["img"]}></img>
        <p>exxxxtra_loooong</p>
        <p>syn</p>
        <button>Profile</button>
      </div>
    );
  };

  return <div>{userBio({})}</div>;
};

export default Bio;
