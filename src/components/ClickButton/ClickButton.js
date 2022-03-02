import React from 'react';
import './clickbutton.css'

const ClickButton = ({ disabled, click, text }) => {
    return (
        <button className="convert-button" disabled={disabled} onClick={() => click()}>{text}</button>
    );
};

export default ClickButton;