import React from 'react';

const styles = {
    img: {
        height: '200px', 
        width:'200px'
    }
}
const DisplayFeedImages = ({img}) => {
    return (
        <div className={"feedImgs"}>
            <img src={img.post_image_url} alt={" "} style={styles}/>
        </div>
    )
}

export default DisplayFeedImages;
