import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Portfolio.css';

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <div className="portfolio-container">
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
                        Visuals
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 