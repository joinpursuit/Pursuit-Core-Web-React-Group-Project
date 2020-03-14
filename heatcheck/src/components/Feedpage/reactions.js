import React, { useState, useEffect } from "react";
import axios from "axios";
const styles = {
  button: {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    backgroundColor: "grey"
  },
  reactionDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
};
const Reactions = ({ id }) => {
  const [allPostreactions, setallPostreactions] = useState([]);

  const getreactions = async postID => {
    let ID = id;
    const url = `http://localhost:3001/reactions/${ID}`;

    try {
      let res = await axios.get(url);
      setallPostreactions(res.data.payload);
    } catch (error) {
      setallPostreactions([]);
    }
  };
  useEffect(() => {
    getreactions({ id });
  }, []);

  console.log(allPostreactions);
  return (
    <div id="reactions" style={styles["reactionDiv"]}>
      <button style={styles["button"]}>🔥</button>
      <p>10</p>

      <button style={styles["button"]}>❄️</button>
      <p>10</p>
    </div>
  );
};

export default Reactions;
