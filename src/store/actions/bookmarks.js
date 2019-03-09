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
export const fetchBookmarks = (token, userId) => {
    return (dispatch) => {
        let dataUrl = `/realdata/${userId}.json?auth=${token}`;

        // if (auth.testMode) {
        //     dataUrl = '/testdata.json';
        // }
        console.log(dataUrl)

        // axios.get(`/realdata/${userId}.json?auth=${token}`)
        // axios.get('/testdata.json')
        //     .then((response) => {
        //         const bookmarks = response.data;
        //         dispatch(bookmarksToState(bookmarks));
        //     })
        //     .catch(error => {
        //         console.log('fetchBookmarks error action: ', error);
        //     });
    };
}