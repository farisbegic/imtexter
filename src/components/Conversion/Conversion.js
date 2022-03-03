import React, {useEffect, useState} from 'react';
import DropInput from "../DropInput/DropInput";
import './conversion.css'
import {createWorker} from "tesseract.js";
import ConvertOptions from "../ConvertOptions/ConvertOptions";
import languages from "../../data/languages";
import outputs from "../../data/outputs";
import ClickButton from "../ClickButton/ClickButton";
import OutputBox from "../OutputBox/OutputBox";

const Conversion = () => {
    const [file, setFile] = useState('');
    const [text, setText] = useState('');
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const worker = createWorker({
        logger: m => {}
    });

    const onConvert = async () => {
        const element = document.getElementsByClassName("convert-button")[0];
        element.innerHTML = "CONVERTING..."
        await worker.load();
        await worker.loadLanguage(code);
        await worker.initialize(code);
        const data = await worker.recognize(file);
        if (data) {
            element.innerHTML = "CONVERT"
            setText(data.data.text);
        }
    };

    const onCopy = async () => {
        if ('clipboard' in navigator) {
            setIsCopied(!isCopied);
            return await navigator.clipboard.writeText(text);
        } else {
            setIsCopied(!isCopied);
            return document.execCommand('copy', true, text);
        }
    }

    const onDownload = () => {
        const element = document.getElementsByClassName("convert-button")[1];
        const blob = new Blob([text], { type: output});
        element.href = URL.createObjectURL(blob);
        element.download = "ImTexter";
    }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(!isCopied)
            }, 3000)
        }
    }, [isCopied])

    return (
        <div className="conversion wrapper">
            <DropInput file={file} setFile={setFile}/>
            <ConvertOptions set={setCode} data={languages} text="language" />
            <ClickButton disabled={!code || !file} click={onConvert} text="CONVERT"/>
            { text && (
                <>
                    <OutputBox text={text} setText={setText}/>
                    <ConvertOptions set={setOutput} data={outputs} text="output" />
                    <ClickButton disabled={!output} click={onDownload} text="DOWNLOAD" />
                    <ClickButton click={onCopy} text={isCopied ? "COPIED" : "COPY"} />
                </>
            )}
        </div>
    );
};

export default Conversion;