import React from 'react';
import LinkButton from "../LinkButton/LinkButton";
import './hero.css'

const Hero = () => {
    return (
        <div id="hero" className="hero-container wrapper">
            <div className="hero-text">
                <h1 className="title">Convert images of any format into text in just seconds.</h1>
                <p className="description">ImTexter is a image to text converter that allows you to extract text from image files. This text converter uses the most up-to-date OCR technology to convert image to text with pinpoint accuracy.</p>
                <LinkButton size="lg">TRY NOW</LinkButton>
            </div>
            <div className="hero-image">
                <img src="./hero.svg" alt="converter"/>
            </div>
        </div>
    );
};

export default Hero;