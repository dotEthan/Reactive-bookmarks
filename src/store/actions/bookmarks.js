import axios from 'axios';
// import cors from 'cors';

import * as actionTypes from './actionTypes';

export const bookmarksToState = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        payload: {
            value: result
        }
    };
}

export const deleteBookmark = (id) => {
    return {
        type: actionTypes.DELETE_BOOKMARK,
        payload: {
            value: id
        }
    };
};

export const saveBookmarks = (bookmarks) => {
    return (dispatch) => {
        // axios.post('/realdata?auth=' + token, bookmarks)
        axios.post('/testdata', bookmarks)
            .then(success => console.log(success))
            .catch(error => console.log(error));
    }
}
// Bring in "state.auth.testMode", let people test with "testdata.json" and login uses "realdata.json". Make Gibberish Names security?
// or pull in where fetchBookmarks is created.
export const fetchBookmarks = (token) => {
    return (dispatch) => {
        // let dataurl = '/realdata.json';

        // if(auth.testMode) {
        //     dataurl = '/testdata.json';
        // }

        axios.get('/realdata.json?auth=' + token)
            .then((response) => {
                let bookmarksArray = [];
                let bookmarkArray = [];
                const bookmarksObj = response.data['bookmarks'];
                console.log(bookmarksObj)
                for (let each in bookmarksObj) {
                    if (bookmarksObj[each]) bookmarksArray.push(bookmarksObj[each]);
                }

                for (let other in bookmarksArray) {
                    console.log(bookmarksArray[other].tags);
                    let newTagArray = bookmarksArray[other].tags.split(',');
                    bookmarksArray[other].tags = newTagArray
                    bookmarkArray.push(Object.entries(bookmarksArray[other]));
                }
                dispatch(bookmarksToState(bookmarksArray));
            })
            .catch(error => {
                console.log('fetchBookmarks error action: ', error);
            });
    };
}