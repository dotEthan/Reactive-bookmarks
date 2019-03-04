import React, { useEffect } from 'react';

import classes from './Bookmarks.module.css';
// import Bookmark from '../../components/Bookmark/Bookmark';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const bookmarks = (props) => {

    useEffect(() => {

        // console.log(props);

    }, [props.bookmarks]);

    const orderHandler = (e) => {
        e.preventDefault();
        props.payload.onIncCounter();
    }

    const bookmarks = props.payload.bookmarks.map((bookmark, i) => <li key={bookmark.id} onClick={() => props.payload.DeleteResultHandler(bookmark.id)}>{bookmark.title}</li>);


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
            <button onClick={props.payload.fetchBookmarksHandler}>fetch</button>
            <ul>
                {bookmarks}
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