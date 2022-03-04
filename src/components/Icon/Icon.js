import React from 'react';
import './icon.css'
const Icon = ({ icon, size}) => {
    return (
        <div className={`icon ${size}`}>
            {icon}
        </div>
    );
};

export default Icon;