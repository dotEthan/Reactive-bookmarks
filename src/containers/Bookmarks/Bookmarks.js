import React, { useState, useEffect } from 'react';

import classes from './Bookmarks.module.css';
// import Bookmark from '../../components/Bookmark/Bookmark';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const bookmarks = (props) => {
    // let [bookmarks, setBookmarks] = useState(props.bookmarks);
    // let [showBookmark, setShowBookmark] = useState(true);

    useEffect(() => {

        // setBookmarks(bookmarks = props.bookmarks);
        console.log(props);
    }, [props.bookmarks]);

    // let overlay = (props.selectedPost || props.selectedPost === 0) ? <div className={classes.selectedBookmark}> {bookmarks[props.selectedPost].title}</div> : null;

    // const toggleHandler = () => {
    //     setShowBookmark(showBookmark = !showBookmark);
    // }

    const orderHandler = (e) => {
        e.preventDefault();
        props.payload.onIncCounter();
    }

    // const deleteHandler = (e) => {
    //     console.log(e);
    //     // props.payload.deleteHandler(e);
    // }

    const results = props.payload.results.map((result, i) => <li key={result.id} onClick={() => props.payload.DeleteResultHandler(result.id)}>{result.value}</li>);


    return (
        <div className={classes.Bookmarks}>
            <h1>BookMarks</h1>
            {/* {overlay} */}
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your name" />
                <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
                <Input inputtype="input" type="text" name="address" placeholder="Your Address" />
                <Button btnType="Success" clicked={orderHandler} >add</Button>
            </form>
            {props.payload.ctr}
            <hr />
            <button onClick={() => props.payload.storeResultHandler(props.payload.ctr)}>Store Result</button>
            <ul>
                {results}
            </ul>
            {/* <div className={classes.BookmarksContain}>
                {(bookmarks.length > 0) ? (
                    bookmarks.map((bookmark, i) => {
                        return (<Bookmark
                            key={bookmark.id}
                            title={bookmark.title} />);
                    })
                ) : <div> No Bookmarks</div>};
            </div> */}
        </div>
    )
}

export default bookmarks;