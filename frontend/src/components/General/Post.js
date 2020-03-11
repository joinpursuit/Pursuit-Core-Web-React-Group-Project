import React from 'react';
import Tag from './Tag';

const Post = ({picture, caption, tags}) => {

let tagsList = tags.map(tag => {
    return <Tag tagName={tag.tag} />
})

    return (
        <div className="postContainer">
            <img src={picture} alt={caption}/>
            <p className="caption" >
                {caption}
            </p>
            <div className="tags" >
                {tagsList}
            </div>
        </div>
    )
}

export default Post;