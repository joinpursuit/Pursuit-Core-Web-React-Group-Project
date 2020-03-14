import React, { useState, useEffect} from 'react';
import DisplayFeedImages from '../ProfilePage/DisplayFeedImages'
import { Link, useLocation } from "react-router-dom";
import NavBar from '../NavBar'
import axios from 'axios'


const Results = (props) => {
  const location = useLocation()

    const [allHashtagPosts, setAllHashtagPosts] = useState([])

    const fetchAllHashtagPosts = async (url) => {
            try {
              let res = await axios.get(url)
              console.log(res)
              let posts = res.data.body.posts
              setAllHashtagPosts(posts)
            } catch (error) {
              console.log(error)  
            }
    }

    useEffect(() => {
        let search = location.pathname.slice(9)
        fetchAllHashtagPosts(`/posts/hashtag/${search}`)
    }, [])

    
    const showPosts = allHashtagPosts.map((post, i) => {
      return <DisplayFeedImages img={post.post_image_url} post_body={post.post_body} timestamp={post.timestamp} hashtag_body={post.hashtag_body} key={i} />;
    });

    return (
        <div className={"displayResults"}>
        <h2>SEARCH RESULTS</h2>
        <br></br>
        {showPosts}
        <button>Go Back</button>
        </div>
    )
}

export default Results;