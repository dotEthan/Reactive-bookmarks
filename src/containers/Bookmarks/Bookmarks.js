import React, { useEffect } from 'react';

import classes from './Bookmarks.module.css';
import Bookmark from './Bookmark/Bookmark';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const bookmarks = (props) => {

    useEffect(() => {

        // console.log(props.payload.bookmarks);

    }, [props.bookmarks]);

    // method.bind(this,args); better?
    const bookmarks = props.payload.bookmarks.map((bookmark, i) => {
        return <Bookmark key={i} bookmarkInfo={bookmark} />
    });


    return (
        <div className={classes.Bookmarks}>
            <h1>BookMarks</h1>
            {/* <button onClick={props.payload.fetchBookmarksHandler}>fetch</button> */}
            <ul>
                {bookmarks}
            </ul>
        </div>
    )
}

export default bookmarks;