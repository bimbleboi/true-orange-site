import React from 'react';
import '../styles/LandingPage.css';
import StarBackground from './StarBackground';
import { imageUrl } from '../utils/publicAssetUrl';

function LandingPage() {
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
        <div className="spotlight-cover">
          <div className="spotlight-text">NO ONE KNOWS <br /> Out Now</div>
          <img 
            src={imageUrl('no one knows cover.png')}
            alt="NO ONE KNOWS - Cover" 
            className="spotlight-image"
          />
        </div>
        <div className="streaming-links">
          <a href="https://open.spotify.com/artist/5JKeCxYDntHxH2KXk6Cdpe" target="_blank" rel="noopener noreferrer">
            <img src={imageUrl('spotify logo 2.jpg')} alt="Spotify" />
          </a>
          <a href="https://music.apple.com/gb/artist/kempf/136093741" target="_blank" rel="noopener noreferrer">
            <img src={imageUrl('apple music 2.jpg')} alt="Apple Music" />
          </a>
          <a href="https://soundcloud.com/user-435056751" target="_blank" rel="noopener noreferrer">
            <img src={imageUrl('souncloud logo 2.jpg')} alt="SoundCloud" />
          </a>
          <a href="https://www.instagram.com/kempf.music/" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <img src={imageUrl('instalogo.jpg')} alt="Instagram" />
          </a>
        </div>
        <div className="copyright-text">©2026 Problem Horse Corridor</div>
      </div>
    </div>
  );
}

export default LandingPage;