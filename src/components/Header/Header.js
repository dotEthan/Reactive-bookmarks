import React from 'react';

import classes from './Header.module.css';

const header = (props) => {
    return (
        <div className={classes.navbar}>
            <div className="logo">BookyMarked</div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Upload</li>
                    <li>Edit</li>
                </ul>
            </div>
        </div>
    );
}

export default header;