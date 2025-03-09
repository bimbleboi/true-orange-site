import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();
  const [onlineText, setOnlineText] = useState('');
  const [portfolioText, setPortfolioText] = useState('');
  const [storeText, setStoreText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const typeText = (text, setText, delay) => {
      return new Promise((resolve) => {
        let index = 0;
        setTimeout(() => {
          const interval = setInterval(() => {
            if (index < text.length) {
              setText(text.slice(0, index + 1));
              index++;
            } else {
              clearInterval(interval);
              resolve();
            }
          }, 150);
        }, delay);
      });
    };

    const animateText = async () => {
      await typeText('Music', setPortfolioText, 500);
    };

    animateText();

    // Cleanup function
    return () => {
      setOnlineText('');
      setPortfolioText('');
      setStoreText('');
    };
  }, []);

  const handleTouch = (event) => {
    const element = event.currentTarget;
    element.classList.add('touched');
    setTimeout(() => {
      element.classList.remove('touched');
    }, 300); // Remove class after animation completes
  };

  const handleHover = (hovering) => {
    setIsHovered(hovering);
  };

  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <div 
          className="logo-online-container"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          onClick={() => navigate('/')}
          onTouchStart={handleTouch}
        >
          <div className={`image-container ${isHovered ? 'hovered' : ''}`}>
            <div className="logo-text">KEMPF</div>
          </div>
        </div>
        <div className="button-container">
          <button 
            onClick={() => navigate('/portfolio')} 
            onTouchStart={handleTouch}
            className="nav-button"
          >
            {portfolioText || '\u00A0'}
          </button>
        </div>
        <div className="social-links">
          <a href="https://www.tiktok.com/@kempfmf" target="_blank" rel="noopener noreferrer">TikTok</a>
          <span className="divider">•</span>
          <a href="https://www.instagram.com/kempfmf/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 