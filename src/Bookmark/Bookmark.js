import React from 'react';
import './Bookmark.css';

const bookmark = (props) => {

    return (
        <div className="Bookmark">
            <p onClick={props.click}>
                Here's the bookmark! {props.title}
            </p>
            <h2>{props.children}</h2>
            <input type="text" onChange={props.changed} value={props.title} />
        </div>
    )
}

export default bookmark;