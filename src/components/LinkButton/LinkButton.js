import React from 'react';
import {Link} from "react-router-dom";
import "./linkbutton.css"

const LinkButton = (props) => {
    return (
        <Link to="/" className={props.size}>TRY NOW</Link>
    );
};

export default LinkButton;