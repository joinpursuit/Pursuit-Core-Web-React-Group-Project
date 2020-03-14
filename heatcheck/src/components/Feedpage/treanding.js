import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingReactions = () => {
   const [trend, setTrend] = useState([]);
    
    useEffect(() => {
        const trending = async (url) => {
            try {
                let res= await axios.get(url);
                setTrend(res.data.payload); 
            } catch (error) {
                setTrend([]);
            }
        }
        trending("http://localhost:3001/tags/trending")
    }, [])

    const trendingDisplay =  trend.map(el => {
        return <li style={{ listStyleType: "none", margin: "25px"}}>{"#" + el.tag}</li>
    })
    return ( 
        <ul style={{ border: "3px dotted red", width:"fit-content"}}>
        <h3>#Treading</h3>
            {trendingDisplay}
        </ul>
    );
}
 
export default TrendingReactions;