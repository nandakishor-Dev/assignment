import React from 'react';

const DragZone = ({ handleFileSelect, uploadData, children }) => {
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const fileList = event.dataTransfer.files;
        handleFileSelect(fileList);
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className='rounded-lg bg-white h-4/5 w-2/5 flex flex-col gap-5 p-3 mt-14'
        >
            {children}
        </div>
    );
};

export default DragZone;
