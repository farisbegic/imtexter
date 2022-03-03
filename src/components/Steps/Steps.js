import React from 'react';
import './steps.css'

const Steps = () => {
    return (
        <div className="steps-section">
            <h1 className="steps-title">How it works?</h1>
            <div className="steps">
                <div className="step">
                    <h2 className="step-number">1</h2>
                    <p className="step-description">Upload an image from your device.</p>
                </div>
                <div className="step">
                    <h2 className="step-number">2</h2>
                    <p className="step-description">Select a language.</p>
                </div>
                <div className="step">
                    <h2 className="step-number">3</h2>
                    <p className="step-description">Select output format and download your converted text.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;