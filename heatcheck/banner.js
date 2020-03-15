import React, { useState, useEffect } from 'react';
import './src/css/banner.css';
import Link from 'react-router-dom';
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
            <Link exact to ={"/feedPage"}>
                <div className="App-content">
                    <h1>Heat Check</h1>
                    <p>It's what's hot right now</p>
                </div>
            </Link>
        </div>
    );

};

export default App;