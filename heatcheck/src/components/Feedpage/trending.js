import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingReactions = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const trending = async url => {
      try {
        let res = await axios.get(url);
        setTrend(res.data.payload);
      } catch (error) {
        setTrend([]);
      }
    };
    trending("http://localhost:3001/posts/trending");
  }, []);

  const trendingDisplay = trend.map((el, i) => {
    return (
      <li key={i} style={{ listStyleType: "none", margin: "25px" }}>
        <a href= {`http://localhost:3001/posts/tag/${el.tag}`} >{"#" + el.tag}</a>
      </li>
    );
  });
  return (
    <div id="trending">
      <ul style={{ border: "3px dotted red", width: "fit-content" }}>
        <h3>#Treading</h3>
        {trendingDisplay}
      </ul>
    </div>
  );
};

export default TrendingReactions;
