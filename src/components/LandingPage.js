import React from 'react';
import '../styles/LandingPage.css';
import StarBackground from './StarBackground';

function LandingPage() {
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
      <div className="content-backdrop">
        <div className="content">
          <img 
            src="/images/IMG_4591 2.png" 
            alt="KEMPF Logo" 
            className="logo glitch"
          />
        </div>
        <div className="streaming-links">
          <a href="https://open.spotify.com/artist/4gVoibhSs8t32lkvQyU3uR" target="_blank" rel="noopener noreferrer">
            <img src="/images/spotify logo 2.jpg" alt="Spotify" />
          </a>
          <a href="https://music.apple.com/us/artist/aidan-kempf/1655182116" target="_blank" rel="noopener noreferrer">
            <img src="/images/apple music 2.jpg" alt="Apple Music" />
          </a>
          <a href="https://soundcloud.com/user-435056751" target="_blank" rel="noopener noreferrer">
            <img src="/images/souncloud logo 2.jpg" alt="SoundCloud" />
          </a>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/kempf.wav/" target="_blank" rel="noopener noreferrer" className="instagram-button">
            <img src="/images/instalogo.jpg" alt="Instagram" />
          </a>
          <span className="divider">•</span>
          <a href="/more">MORE</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;