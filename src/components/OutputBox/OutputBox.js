import React from 'react';
import './outputbox.css'

const OutputBox = ({ text, setText }) => {

    return (
        <textarea className="output-text" name="text" id="text" cols="30" rows="5" value={text} onChange={(e) => setText(e.target.value)}/>
    );
};

export default OutputBox;