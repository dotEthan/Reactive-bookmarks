import React, { useEffect } from 'react';
import classes from './Bookmark.module.css';

const bookmark = (props) => {
    useEffect(() => {
        console.log('Bookmark.js', "use effect")
    });
    return (
        <div className={classes.Bookmark}>
            <p onClick={props.click}>
                Here's the bookmark! {props.title}
            </p>
            <h2>{props.children}</h2>
            <input type="text" onChange={props.changed} value={props.title} />
        </div>
    )
}

export default bookmark;