import React, { useState, useEffect } from 'react'
import Post from '../General/Post';

const UserPosts = () => {
    const picture = "https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg"
    return (
        <div className="postFeed">
            <Post picture={picture} caption="The ocean is blue" tags={[{tag: "Ocean"}, {tag: "Water"}]} />
            <Post picture={picture} caption="The ocean is green" tags={[{tag: "Ocean"}, {tag: "Water"}, {tag: "Green"}]} />
        </div>
    )
}

export default UserPosts;