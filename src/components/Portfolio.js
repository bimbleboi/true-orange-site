import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Portfolio.css';

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <div className="portfolio-container">
            <div className="menu-container">
                <div className="menu-row">
                    <button 
                        className="menu-item"
                        onClick={() => navigate('/music')}
                    >
                        Videos
                    </button>
                    <button 
                        className="menu-item"
                        onClick={() => navigate('/videos')}
                    >
                        Music
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 