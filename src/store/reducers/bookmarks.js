import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    bookmarks: [],
}

const deleteBookmark = (state, action) => {
    const newArray = state.bookmarks.filter((bookmark) => bookmark.id !== action.payload.value);
    return updateObject(state, { bookmarks: newArray });
};

const bookmarksToState = (state, action) => {
    const newBookmarks = {};
    return updateObject(state, { bookmarks: newBookmarks });
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { bookmarks: action.payload.value });
        case actionTypes.DELETE_BOOKMARK:
            return deleteBookmark(state, action);
        case actionTypes.BOOKMARKS_TO_STATE:
            return bookmarksToState(state, action);

        default:
            return state
    };
}

export default reducer;