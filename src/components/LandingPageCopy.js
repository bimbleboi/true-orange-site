import React from 'react';
import '../styles/LandingPage.css';
import StarBackground from './StarBackground';

function LandingPageCopy() {
  return (
    <div 
      className="landing-container"
      style={{
        backgroundImage: 'url(/images/mark-trois.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <StarBackground />
      <div className="content-backdrop"></div>
      <div className="content">
        <img 
          src="/images/IMG_4591 2.png" 
          alt="KEMPF Logo" 
          className="logo glitch"
        />
      </div>
      <div className="bio-section">
        <p className="bio-text">VANCOUVER • MINNEAPOLIS</p>
        <p className="bio-text">DIRECT MESSAGE FOR INQUIRIES <a href="https://www.instagram.com/kempf.wav/" target="_blank" rel="noopener noreferrer" className="bio-link">@KEMPF.WAV</a></p>
      </div>
    </div>
  );
}

export default LandingPageCopy; 