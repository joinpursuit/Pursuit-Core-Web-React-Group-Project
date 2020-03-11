import React, { useState, useEffect } from 'react'
import Post from '../General/Post';

const UserPosts = ({posts}) => {
    const postList = posts.map(post => {
        return <Post {...post} />
    })
    
    return (
        <div className="postFeed">
            <h1 className="postHeader">Posts</h1>
            {postList}
        </div>
    )
}

export default UserPosts;