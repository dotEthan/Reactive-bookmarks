import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, { counter: state.counter + action.value })
        // return {
        //     ...state,
        //     counter: state.counter + action.value
        // }
        default:
            return state
    };
}

export default reducer;