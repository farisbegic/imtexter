import React from 'react';
import './steps.css'
import steps from "../../data/steps";

const Steps = () => {
    return (
        <div id="steps" className="steps-container wrapper">
            <p className="pre-text">TUTORIAL</p>
            <h1 className="title">How it works?</h1>
            <div className="step-list">
                { steps.map((step, index) => (
                    <div className="step" key={index}>
                        <h2 className="step-number">{step.number}</h2>
                        <p className="step-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;