import React from 'react';
import Hero from "../components/Hero/Hero";
import Importance from "../components/Importance/Importance";
import Cases from "../components/Cases/Cases";

const About = () => {
    return (
        <>
            <Hero title="Sick of having to type the entire text to extract it from an image?"
                  description="ImTexter is your answer. Our online image to text converter is a free OCR application that quickly convert image to text. That, too, with 100 percent precision. This text tool extracts text from photos using optical character recognition (OCR) technology."
                  image="./convert.svg"
            />
            <Importance />
            <Cases />
        </>
    );
};

export default About;