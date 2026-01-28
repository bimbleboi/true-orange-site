import React from 'react';
import '../styles/LandingPage.css';
import StarBackground from './StarBackground';
import { imageUrl } from '../utils/publicAssetUrl';

function LandingPageCopy() {
  return (
    <div 
      className="landing-container"
      style={{
        backgroundImage: `url(${imageUrl('mark-trois.gif')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <StarBackground />
      <div className="content-backdrop">
        <div className="content">
          <img 
            src={imageUrl('IMG_4591 2.png')}
            alt="KEMPF Logo" 
            className="logo glitch"
          />
        </div>
        <div className="bio-section">
          <p className="bio-text">VANCOUVER • MINNEAPOLIS</p>
          <p className="bio-text">DIRECT MESSAGE FOR INQUIRIES <a href="https://www.instagram.com/kempf.wav/" target="_blank" rel="noopener noreferrer" className="bio-link">@KEMPF.WAV</a></p>
        </div>
      </div>
    </div>
  );
}

export default LandingPageCopy; 