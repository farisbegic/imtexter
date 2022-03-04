import React from 'react';
import Hero from "../components/Hero/Hero";
import Steps from "../components/Steps/Steps";
import Conversion from "../components/Conversion/Conversion";
import Benefit from "../components/Benefit/Benefit";

const Home = () => {
    return (
        <>
            <Hero title="Convert images of any format into text in just seconds."
                  description="ImTexter is a image to text converter that allows you to extract text from image files. This text converter uses the most up-to-date OCR technology to convert image to text with pinpoint accuracy."
                  buttonSize="lg"
                  image="./hero.svg"
            />
            <Benefit />
            <Steps />
            <Conversion />
        </>
    );
};

export default Home;