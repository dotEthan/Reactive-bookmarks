import axios from 'axios';

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

export const toggleTestMode = () => {
    return {
        type: actionTypes.TOGGLE_TEST_MODE
    }
}

// Bring in "state.auth.testMode", let people test with "testdata.json" and login uses "realdata.json". Make Gibberish Names security?
// or pull in where fetchBookmarks is created.
export const fetchBookmarks = (token, userId) => {
    return (dispatch) => {
        // let dataurl = `/realdata.json?auth=${token}`;

        // if(auth.testMode) {
        //     dataurl = '/testdata.json';
        // }

        // axios.get(`/realdata/${userId}.json?auth=${token}`)
        axios.get('/testdata.json')
            .then((response) => {
                // console.log('fetching success', response);
                const bookmarks = Object.entries(response.data);
                // const bookmarksArray = bookmarks.map(mark => {
                //     Object.entries(mark);
                //     console.log("mark is ", mark);
                // });
                const bmTrim = bookmarks.map((mark) => mark.filter((m, i) => (i === 1) ? true : false));
                console.log('organizing bookmarks, object.key/value/what?', bmTrim);
                dispatch(bookmarksToState(bmTrim));
                // let bookmarksArray = [];
                // let bookmarkArray = [];
                // const bookmarksObj = response.data['bookmarks'];
                // console.log(bookmarksObj);
                // for (let each in bookmarksObj) {
                //     if (bookmarksObj[each]) bookmarksArray.push(bookmarksObj[each]);
                // }
                // console.log(bookmarksArray)

                // for (let other in bookmarksArray) {
                //     console.log(bookmarksArray[other].tags);
                //     let newTagArray = bookmarksArray[other].tags.split(',');
                //     bookmarksArray[other].tags = newTagArray
                //     bookmarkArray.push(Object.entries(bookmarksArray[other]));
                // }
            })
            .catch(error => {
                console.log('fetchBookmarks error action: ', error);
            });
    };
}