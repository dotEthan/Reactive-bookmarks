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

export const fetchBookmarks = () => {
    return (dispatch) => {
        axios.get('/fakedata.json')
            .then((response) => {
                let bookmarksArray = [];
                let bookmarkArray = [];
                const bookmarksObj = response.data['bookmarks'];

                for (let each in bookmarksObj) {
                    if (bookmarksObj[each]) bookmarksArray.push(bookmarksObj[each]);
                }

                for (let other in bookmarksArray) {
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