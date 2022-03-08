import React from 'react';
import './icon.css'
const Icon = ({ icon, size, color }) => {
    return (
        <div className={`icon ${size} ${color}`}>
            {icon}
        </div>
    );
};

export default Icon;