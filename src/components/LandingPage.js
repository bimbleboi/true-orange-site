import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import { triggerHaptic } from '../utils/haptics';

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

  const handleClick = () => {
    triggerHaptic();
    navigate('/portfolio');
  };

  return (
    <div className="landing-container">
      <StarBackground />
      <div className="content">
        <h1 
          className="glitch-text"
          onClick={() => navigate('/music')}
          style={{ cursor: 'pointer' }}
        >
          KEMPF
        </h1>
        <div className="button-container">
          <button onClick={() => navigate('/music')}>MUSIC</button>
          <button onClick={() => navigate('/videos')}>VISUALS</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 