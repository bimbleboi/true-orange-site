import React from 'react';
import '../styles/LandingPage.css';
import StarBackground from './StarBackground';

function LandingPage() {
  return (
    <div className="landing-container">
      <StarBackground />
      <div className="content">
        <h1 className="logo-text">
          KEMPF
        </h1>
      </div>
      <div className="streaming-links">
        <a href="https://open.spotify.com/artist/4gVoibhSs8t32lkvQyU3uR" target="_blank" rel="noopener noreferrer">
          <img src="/images/spotify logo 2.jpg" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/aidan-kempf/1655182116" target="_blank" rel="noopener noreferrer">
          <img src="/images/apple music 2.jpg" alt="Apple Music" />
        </a>
        <a href="https://soundcloud.com/user-435056751" target="_blank" rel="noopener noreferrer">
          <img src="/images/souncloud logo 2.jpg" alt="SoundCloud" />
        </a>
      </div>
      <div className="social-links">
        <a href="https://www.tiktok.com/@kempfmf" target="_blank" rel="noopener noreferrer">TikTok</a>
        <span className="divider">•</span>
        <a href="https://www.instagram.com/kempfmf/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
}

export default LandingPage;