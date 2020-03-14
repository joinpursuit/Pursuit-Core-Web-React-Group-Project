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

    const showImages = allHashtagPosts.map((img, i) => {
      return <DisplayFeedImages img={img.post_image_url} key={i} />;
    });

    return (
        <div className={"displayResults"}>
        <h2>SEARCH RESULTS</h2>
        <br></br>
        {showImages}
        <button>Go Back</button>
        </div>
    )
}

export default Results;