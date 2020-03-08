import React from 'react';

const styles = {
    img: {
        height: '400px', 
        width:'400px'
    }
}
const DisplayFeedImages = ({img}) => {
    return (
        <div className={"feedImgs"}>
            <img src={img} alt={" "} style={styles.img}/>
        </div>
    )
}

export default DisplayFeedImages;
