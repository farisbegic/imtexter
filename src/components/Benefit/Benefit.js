import React from 'react';
import './benefit.css'
import benefits from "../../data/benefits";

const Benefit = () => {
    return (
        <div className="benefit-container">
            <div className="wrapper">
                <p className="benefit-text pre-text">FEATURES</p>
                <h1 className="benefit-text title">The advantages of using our ORM.</h1>
                <div className="benefit-list">
                    { benefits.map(benefit => (
                        <div className="benefit">
                            <div className="benefit-icon">
                                {benefit.icon}
                            </div>
                            <h4 className="benefit-text subtitle">{benefit.title}</h4>
                            <p className="benefit-text description">{benefit.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Benefit;