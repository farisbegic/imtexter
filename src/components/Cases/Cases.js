import React from 'react';
import cases from "../../data/cases";
import './cases.css'

const Cases = () => {
    return (
        <div className="cases-container wrapper">
            <p className="pre-text">CASES</p>
            <h1 className="title">Where may a photo to text converter be used?</h1>
            <div className="case-list">
                { cases.map((instance, index) => (
                    <div className="case">{instance}</div>
                ))}
            </div>
        </div>
    );
};

export default Cases;