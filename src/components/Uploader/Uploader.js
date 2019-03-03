import React from 'react';

import classes from './Uploader.module.css';

const uploader = (props) => {
    let btnClass = '';


    if (props.showBookmarks) {
        btnClass = classes.Red;
    }

    return (
        <div className="uploadContain">
            <h1>UPLOADING!</h1>
            <button className={btnClass} onClick={props.click}>Upload</button>
        </div>
    );
}

export default uploader;