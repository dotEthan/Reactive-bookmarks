import React, { useState, useEffect } from 'react';
import classes from './Bookmark.module.css';

const bookmark = (props) => {
    const [bookmark, updateBookmarks] = useState([
        ['dateAdded', null],
        ['description', null],
        ['img', null],
        ['keyword', null],
        ['lastModified', null],
        ['tags', null],
        ['title', null],
        ['url', null]
    ]);

    useEffect(() => {
        let da, desc, img, keyW, lm, tags, title, url = null;

        props.bookmarkInfo.map(info => {
            switch (info[0]) {
                case 'dateAdded':
                    da = info[1];
                    break;
                case 'description':
                    desc = info[1];
                    break;
                case 'img':
                    img = info[1];
                    break;
                case 'keyword':
                    keyW = info[1];
                    break;
                case 'lastModified':
                    lm = info[1];
                    break;
                case 'tags':
                    tags = info[1];
                    break;
                case 'title':
                    title = info[1];
                    break;
                case 'url':
                    url = info[1];
                    break;
                default:
                    console.log('bookmark parser, this should NOT happen. Bookmark.js', info[0]);
            }
        });

        updateBookmarks([
            ['dateAdded', da],
            ['description', desc],
            ['img', img],
            ['keyword', keyW],
            ['lastModified', lm],
            ['tags', tags],
            ['title', title],
            ['url', url]

        ]);

    }, [props.bookmarkInfo]);

    return (
        <div className={classes.Bookmark}>
            {bookmark[6][1]}
            <p>
                Here's the bookmark!
            </p>
            <h2>{bookmark[7][1]}</h2>
        </div>
    )
}

export default bookmark;