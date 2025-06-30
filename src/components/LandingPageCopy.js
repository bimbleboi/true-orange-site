import React from 'react';
import '../styles/LandingPage.css';
import StarBackground from './StarBackground';

function LandingPageCopy() {
  return (
    <div className="landing-container">
      <StarBackground />
      <div className="content">
        <img 
          src="/images/IMG_4591 2.png" 
          alt="KEMPF Logo" 
          className="logo glitch"
        />
        <div className="gif-container">
          <img src="/images/mark-trois.gif" alt="Animated scene" className="shoe-gif" />
        </div>
      </div>
      <div className="bio-section">
        <p className="bio-text">VANCOUVER • MINNEAPOLIS</p>
        <p className="bio-text">DIRECT MESSAGE WITH INQUIRIES OR CONTACT KEMPFMF@GMAIL.COM</p>
      </div>
    </div>
  );
}

export default LandingPageCopy; 