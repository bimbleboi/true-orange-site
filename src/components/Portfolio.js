import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarBackground from './StarBackground';
import '../styles/Portfolio.css';
import { triggerHaptic } from '../utils/haptics';

const Portfolio = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        triggerHaptic();
        navigate(path);
    };

    return (
        <div className="portfolio-container">
            <StarBackground />
            <div className="menu-container">
                <div className="menu-items">
                    <button 
                        className="menu-item"
                        onClick={() => handleNavigation('/music')}
                    >
                        Streaming
                    </button>
                    <button 
                        className="menu-item"
                        onClick={() => handleNavigation('/videos')}
                    >
                        Videos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 