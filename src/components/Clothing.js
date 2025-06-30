import React from 'react';
import StarBackground from './StarBackground';
import '../styles/Clothing.css';
import '../styles/LandingPage.css';
import { triggerHaptic } from '../utils/haptics';

const Clothing = () => {
    const links = [
        { name: 'Spotify', url: 'https://open.spotify.com/artist/4gVoibhSs8t32lkvQyU3uR' },
        { name: 'Apple Music', url: 'https://music.apple.com/ca/artist/aidan-kempf/1655182116' },
        { name: 'SoundCloud', url: 'https://soundcloud.com/user-435056751' }
    ];

    const handleLinkClick = (url) => {
        triggerHaptic();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="music-page-container">
            <StarBackground />
            <div className="music-page-logo">
                <img 
                    src="/images/IMG_4591 2.png" 
                    alt="KEMPF Logo" 
                    className="logo glitch"
                />
            </div>
            {links.map((link, index) => (
                <a
                    key={index}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.url);
                    }}
                    href={link.url}
                    className="music-link"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default Clothing; 