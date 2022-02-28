import React from 'react';
import {Link} from "react-router-dom";
import "./button.css"

const Button = (props) => {
    return (
        <Link to="/" className={props.size}>TRY NOW</Link>
    );
};

export default Button;