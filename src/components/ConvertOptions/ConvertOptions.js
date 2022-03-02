import React, {useState} from 'react';
import {DropdownList} from "react-widgets/cjs";
import './convertoptions.css'

const ConvertOptions = ({ set, data, text }) => {
    const [value, setValue] = useState(`Select your ${text}.`)
    return (
        <DropdownList
            className="dropdown-list"
            dataKey="id"
            textField="language"
            value={value}
            onChange={(nextValue) => {
                set(nextValue.code)
                setValue(nextValue.language)
            }}
            data={data}
        />
    );
};

export default ConvertOptions;