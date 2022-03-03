import React from 'react';
import './steps.css'
import steps from "../../data/steps";

const Steps = () => {
    return (
        <div className="steps-container wrapper">
            <p className="pre-text">TUTORIAL</p>
            <h1 className="title">How it works?</h1>
            <div className="step-list">
                { steps.map(step => (
                    <div className="step">
                        <h2 className="step-number">{step.number}</h2>
                        <p className="step-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;