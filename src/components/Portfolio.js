import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarBackground from './StarBackground';
import '../styles/Portfolio.css';

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <div className="portfolio-container">
            <StarBackground />
            <div className="menu-container">
                <div className="menu-items">
                    <button 
                        className="menu-item"
                        onClick={() => navigate('/music')}
                    >
                        Streaming
                    </button>
                    <button 
                        className="menu-item"
                        onClick={() => navigate('/videos')}
                    >
                        Videos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 