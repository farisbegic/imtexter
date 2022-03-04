import React from 'react';
import {HashLink} from "react-router-hash-link";
import "./linkbutton.css"

const LinkButton = (props) => {
    return (
        <HashLink to="/#conversion" className={`button-${props.size}`}>TRY NOW</HashLink>
    );
};

export default LinkButton;