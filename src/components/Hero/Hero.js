import React from 'react';
import LinkButton from "../LinkButton/LinkButton";
import './hero.css'

const Hero = ({ title, description, buttonSize, image }) => {
    return (
        <div id="hero" className="hero-container wrapper">
            <div className="hero-text">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
                {buttonSize && (
                    <LinkButton size={buttonSize}>TRY NOW</LinkButton>
                )}
            </div>
            <div className="hero-image">
                <img src={image} alt="converter"/>
            </div>
        </div>
    );
};

export default Hero;