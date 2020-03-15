import React from 'react';

const styles = {
    img: {
        height: '400px', 
        width:'400px'
    }
}
const DisplayFeedImages = ({img, post_body, timestamp, hashtag_body}) => {
    timestamp = new Date();
    const date = timestamp.toDateString();
    return (
        <div className={"feedImgs"}>
            <h1>{date}</h1>
            <img src={img} alt={" "} style={styles.img}/>
            <h2>{post_body}</h2>
            <p>{hashtag_body}</p>
        </div>
    )
}

export default DisplayFeedImages;
