import React, { useEffect } from 'react';
import classes from './Bookmark.module.css';

const bookmark = (props) => {
    let dateAdded = null;
    let description = null;
    let img = null;
    let keyword = null;
    let lastModified = null;
    let tags = null;
    let title = null;
    let url = null;

    useEffect(() => {
        console.log('Bookmark.js', props.bookmarkInfo);
        props.bookmarkInfo.map(info => {
            // console.log(info[0]);
            switch (info[0]) {
                case 'dateAdded':
                    dateAdded = info[1];
                    break;
                case 'description':
                    description = info[1];
                    break;
                case 'img':
                    img = info[1];
                    break;
                case 'keyword':
                    keyword = info[1];
                    break;
                case 'lastModified':
                    lastModified = info[1];
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

    }, [props.bookmarkInfo]);

    return (
        <div className={classes.Bookmark}>
            <p>
                Here's the bookmark! {title}
            </p>
            <h2>{url}</h2>
        </div>
    )
}

export default bookmark;