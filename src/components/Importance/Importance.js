import React from 'react';
import importances from "../../data/importances";
import './importance.css'

const Importance = () => {
    return (
        <div className="importance-container">
            <p className="white-text pre-text">IMPORTANCE</p>
            <h1 className="white-text title">Why is it important?</h1>
            <div className="importance-list wrapper">
                { importances.map((importance, index) => (
                    <div className="importance" key={index}>
                        <h3 className="subtitle">{importance.title}</h3>
                        <p className="description">{importance.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Importance;