import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Results = ({searchInput}) => {
    const [allHashtagPosts, setAllHashtagPosts] = useState([])

    const fetchAllHashtagPosts = async (url) => {
            try {
              let res = await axios.get(url)
              // debugger
            } catch (error) {
              console.log(error)  
            }
    }

    useEffect(() => {
        fetchAllHashtagPosts(`/posts/${searchInput}`)
    }, [])
    return (
        <div className={"displayResults"}>
        <button>Go Back</button>
        </div>
    )
}

export default Results;