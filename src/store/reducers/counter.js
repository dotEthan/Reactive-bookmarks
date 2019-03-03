import * as actionTypes from '../actions';


const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        default:
            return state
    };
}

export default reducer;