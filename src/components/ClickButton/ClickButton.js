import React from 'react';
import './clickbutton.css'

const ClickButton = ({ disabled, click, text }) => {
    console.log(disabled)
    return (
        <a className={`convert-button ${disabled && "disabled"}`} onClick={() => click()}>{text}</a>
    );
};

export default ClickButton;