import React, {useCallback, useEffect} from 'react';
import {useDropzone} from "react-dropzone";
import './input.css'

const DropInput = ({ file, setFile }) => {
    const onDrop = useCallback(acceptedFiles => {
        setFile(Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0])
        }))
    }, [setFile])

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: 'image/jpeg, image/png'
    });

    useEffect(() => {
        if (file) {
            URL.revokeObjectURL(file.preview)
        }
    }, []);

    return (
        <div>
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag and drop drop image here, or click to select image.</p>
            </div>
        </div>
    );
};

export default DropInput;