import * as actionTypes from './actionTypes';

export const increment = (val) => {
    return {
        type: actionTypes.INCREMENT,
        value: val
    };
};