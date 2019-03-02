import React, { useState, useEffect } from 'react';

import classes from './Bookmarks.module.css';
import Bookmark from '../../components/Bookmark/Bookmark';
import Uploader from '../../components/Uploader/Uploader';

const bookmarks = (props) => {
    let [bookmarks, setBookmarks] = useState(props.bookmarks);
    let [showBookmark, setShowBookmark] = useState(true);

    useEffect(() => {
        setBookmarks(bookmarks = props.bookmarks);
    }, [props.bookmarks]);

    let overlay = (props.selectedPost || props.selectedPost === 0) ? <div className={classes.selectedBookmark}> {bookmarks[props.selectedPost].title}</div> : null;

    const toggleHandler = () => {
        setShowBookmark(showBookmark = !showBookmark);
    }

    return (
        <div className={classes.Bookmarks}>
            <Uploader
                click={toggleHandler} />
            <div>hi</div>
            {overlay}
            {(showBookmark) ? (
                <div className={classes.BookmarksContain}>
                    {props.bookmarks.map((bookmark, i) => {
                        return <Bookmark
                            key={bookmark.id}
                            title={bookmark.title}
                            click={() => props.click(i)}
                            changed={(e) => props.change(e, bookmark.id)} />
                    })};
                    </div>
            ) : null
            }
        </div>
    )
}

export default bookmarks;