import React from 'react';
import StarBackground from './StarBackground';
import '../styles/Clothing.css';

const Clothing = () => {
    const links = [
        { name: 'Spotify', url: 'https://open.spotify.com/artist/4gVoibhSs8t32lkvQyU3uR' },
        { name: 'Apple Music', url: 'https://music.apple.com/ca/artist/aidan-kempf/1655182116' },
        { name: 'SoundCloud', url: 'https://soundcloud.com/user-435056751' }
    ];

    return (
        <div className="music-page-container">
            <StarBackground />
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="music-link"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default Clothing; 