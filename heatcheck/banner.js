import React, { useState, useEffect } from 'react';
import './src/css/banner.css';
import desktopImage from './src/css/images/LogoMakr_19YWZo.png';
import mobileImage from './src/css/images/LogoMakr_19YWZo.png';

const App = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });
    
    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Pineapples</h1>
                <p>They are good</p>
            </div>
        </div>
    );

};

export default App;