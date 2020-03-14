import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../NavBar'
import axios from 'axios'


const Results = ({ searchInput }) => {
    const [allHashtagPosts, setAllHashtagPosts] = useState([])

    const fetchAllHashtagPosts = async (url) => {
            try {
              let res = await axios.get(url)
              debugger
            } catch (error) {
              console.log(error)  
            }
    }

    useEffect(() => {
        fetchAllHashtagPosts(`/posts/${searchInput}`)
    }, [])
    return (
        <div className={"displayResults"}>
        <h2>SEARCH RESULTS</h2>
        <br></br>
        <button>Go Back</button>
        </div>
    )
}

export default Results;