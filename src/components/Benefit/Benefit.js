import React from 'react';
import './benefit.css'
import benefits from "../../data/benefits";
import Icon from "../Icon/Icon";

const Benefit = () => {
    return (
        <div id="benefit" className="benefit-container">
            <div className="wrapper">
                <p className="white-text pre-text">BENEFITS</p>
                <h1 className="white-text title">The advantages of using our ORM.</h1>
                <div className="benefit-list">
                    { benefits.map((benefit, index) => (
                        <div className="benefit" key={index}>
                            <Icon size="lg" icon={benefit.icon} color="white"/>
                            <h4 className="white-text subtitle">{benefit.title}</h4>
                            <p className="white-text description">{benefit.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Benefit;