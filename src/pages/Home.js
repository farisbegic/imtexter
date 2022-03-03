import React from 'react';
import Hero from "../components/Hero/Hero";
import Steps from "../components/Steps/Steps";
import Conversion from "../components/Conversion/Conversion";
import Benefit from "../components/Benefit/Benefit";

const Home = () => {
    return (
        <>
            <Hero />
            <Benefit />
            <Steps />
            <Conversion />
        </>
    );
};

export default Home;