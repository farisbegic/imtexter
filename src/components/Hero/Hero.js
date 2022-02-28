import React from 'react';
import Button from "../Button/Button";
import './hero.css'

const Hero = () => {
    return (
        <div className="home-hero">
            <div className="hero-text">
                <h1 className="hero-title">CONVERT IMAGES TO TEXT</h1>
                <p className="hero-description">Save yourself time writing the text from images.</p>
                <Button size="lg">TRY NOW</Button>
            </div>
            <div className="hero-video">
                <iframe src="https://share.synthesia.io/embeds/videos/ae43088a-a51b-4d2a-ac69-2b7caaa93ba6" loading="lazy" title="Synthesia video player - Your AI video" allow="encrypted-media; fullscreen;"></iframe>
            </div>
        </div>
    );
};

export default Hero;