import React from 'react';
import '../styles/LandingPage.css';
import StarBackground from './StarBackground';

function LandingPage() {
  // Helper function to properly encode image paths with spaces
  const getImagePath = (filename) => {
    // Replace spaces with %20 for proper URL encoding
    const encodedFilename = filename.replace(/ /g, '%20');
    return `/images/${encodedFilename}`;
  };

  return (
    <div 
      className="landing-container"
      style={{
        backgroundImage: `url(${getImagePath('mark-trois.gif')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <StarBackground />
      <div className="content-backdrop">
        <div className="content">
          <img 
            src={getImagePath('IMG_4591 2.png')}
            alt="KEMPF Logo" 
            className="logo glitch"
          />
        </div>
        <div className="spotlight-cover">
          <div className="spotlight-text">SPOTLIGHT OUT NOW</div>
          <img 
            src={getImagePath('spotlight cover.png')}
            alt="Spotlight Cover" 
            className="spotlight-image"
          />
        </div>
        <div className="streaming-links">
          <a href="https://open.spotify.com/artist/5JKeCxYDntHxH2KXk6Cdpe" target="_blank" rel="noopener noreferrer">
            <img src={getImagePath('spotify logo 2.jpg')} alt="Spotify" />
          </a>
          <a href="https://music.apple.com/gb/artist/kempf/136093741" target="_blank" rel="noopener noreferrer">
            <img src={getImagePath('apple music 2.jpg')} alt="Apple Music" />
          </a>
          <a href="https://soundcloud.com/user-435056751" target="_blank" rel="noopener noreferrer">
            <img src={getImagePath('souncloud logo 2.jpg')} alt="SoundCloud" />
          </a>
          <a href="https://www.instagram.com/kempf.music/" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <img src={getImagePath('instalogo.jpg')} alt="Instagram" />
          </a>
        </div>
        <div className="copyright-text">©2026 Problem Horse Corridor</div>
      </div>
    </div>
  );
}

export default LandingPage;