import React, { useState, useEffect } from "react";
import axios from "axios";
const styles = {
  button: {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    backgroundColor: "grey",
    borderColor: "black",
    ":hover": {
      color: "pink"
    }
  },
  reactionDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
};

const Reactions = () => {
  // let cold = 0;
  // let hot = 1;
  const [allPostreactions, setallPostreactions] = useState([]);
  const [reationsHot, setreationsHot] = useState(0);
  const [reationsCold, setreationsCold] = useState(0);

  const getreactions = async postID => {
    // let ID = id;
    const url = `http://localhost:3001/reactions/1`;

    try {
      let res = await axios.get(url);

      setallPostreactions(res.data.payload);
    } catch (error) {
      setallPostreactions([]);
    }
  };
  useEffect(() => {
    getreactions();
  }, []);

  const reactionsCount = async () => {
    let hotNum = 0;
    let coldNum = 0;
    // for (let i = 0; i < allPostreactions.length; i++) {
    //   if (allPostreactions[i]["reaction"] === "hot") {
    //     hotNum++;
    //     console.log("hot");
    //   } else {
    //     coldNum++;
    //   }
    // }
    // setreationsHot(hotNum);
    // setreationsCold(coldNum);
  };
  // reactionsCount();
  return (
    <div id="reactions" style={styles["reactionDiv"]}>
      <button style={styles["button"]}>🔥</button>
      <p>{reationsHot}</p>

      <button style={styles["button"]}>❄️</button>
      <p>{reationsCold}</p>
    </div>
  );
};

export default Reactions;
