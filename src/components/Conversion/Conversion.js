import React, {useState} from 'react';
import DropInput from "../DropInput/DropInput";
import './conversion.css'
import {createWorker} from "tesseract.js";
import ConvertOptions from "../ConvertOptions/ConvertOptions";
import languages from "../../data/languages";
import outputs from "../../data/outputs";
import ClickButton from "../ClickButton/ClickButton";
import OutputBox from "../OutputBox/OutputBox";

const Conversion = () => {
    const [file, setFile] = useState({});
    const [text, setText] = useState('');
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const worker = createWorker({
        logger: m => {}
    });

    const onConvert = async () => {
        await worker.load();
        await worker.loadLanguage(code);
        await worker.initialize(code);
        const { data: { text } } = await worker.recognize(file);
        setText(text);
    };

    const onDownload = async () => {
        console.log("TO BE IMPLEMENTED")
        console.log(output)
    }

    return (
        <div className="conversion">
            <DropInput file={file} setFile={setFile}/>
            <ConvertOptions set={setCode} data={languages} text="language" />
            <ClickButton disabled={!code} click={onConvert} text="CONVERT"/>
            { text && (
                <>
                    <OutputBox text={text} setText={setText}/>
                    <ConvertOptions set={setOutput} data={outputs} text="output" />
                    <ClickButton click={onDownload} text="DOWNLOAD" />
                </>
            )}
        </div>
    );
};

export default Conversion;