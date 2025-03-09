import React from 'react';
import StarBackground from './StarBackground';
import '../styles/GraffitiGallery.css';

const GraffitiGallery = () => {
    return (
        <div style={{ 
            backgroundColor: 'black', 
            minHeight: '100vh', 
            width: '100vw' 
        }}>
            <StarBackground />
        </div>
    );
};

export default GraffitiGallery; 