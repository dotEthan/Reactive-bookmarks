import axios from 'axios';

import * as actionTypes from './actionTypes';
import { fetchBookmarks } from './bookmarks';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, refreshToken) => {
    // console.log('authsucess');
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
        refreshToken: refreshToken
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authLogout = () => {
    // console.log('logging Out');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('refreshToken');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authRefresh = (token) => {
    // console.log('authRefresh');
    return dispatch => {
        const refreshData = {
            grant_type: 'refresh_token',
            refresh_token: token
        };
        axios.post('https://securetoken.googleapis.com/v1/token?key=AIzaSyCERPPL7ES7rU8L1Paq36bKOsUuP2VcPI8', refreshData)
            .then(response => {
                dispatch(authSuccess(response.data.id_token, response.data.user_id, response.data.refresh_token));
                dispatch(checkAuthTimeout(response.data.expires_in, response.data.refresh_token));
            })
            .catch(error => console.log("authRefreshtoken: ", error));
    }
}

export const checkAuthTimeout = (exp, token) => {
    // console.log('checkauthtimeout', exp);
    // exp = 5000;
    return dispatch => {
        setTimeout(() => {
            dispatch(authRefresh(token));
        }, exp * 1000);
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        // Does register auto signup?
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCERPPL7ES7rU8L1Paq36bKOsUuP2VcPI8';
        if (!isSignup) url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCERPPL7ES7rU8L1Paq36bKOsUuP2VcPI8'
        axios.post(url, authData)
            .then(response => {
                console.log(response.data.localId)
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                //Maybe better to contact firebase to get it through "getuserdata" firebase auth rest api
                localStorage.setItem('userId', response.data.localId);
                // Maybe better to keep it refreshing everytime speak to Firebase with this, it never expires. Encrypt in app before local storage?
                localStorage.setItem('refreshToken', response.data.refreshToken);
                dispatch(authSuccess(response.data.idToken, response.data.localId, response.data.refreshToken));
                dispatch(checkAuthTimeout(response.data.expires_in, response.data.refreshToken));
                dispatch(fetchBookmarks(response.data.idToken));
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error));
            });
    }
}

// working? Yes! Longer  times?
export const authTokenCheck = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        // flatten this
        if (!token) {
            dispatch(authLogout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(authLogout());
            } else {
                const userId = localStorage.getItem('userId');
                const refreshToken = localStorage.getItem('refreshToken');
                dispatch(authSuccess(token, userId, refreshToken)); //getrefreshtoken from state
                dispatch(checkAuthTimeout(Math.floor((expirationDate.getTime() - new Date().getTime()) / 1000), refreshToken));
                dispatch(fetchBookmarks(token, userId));
            }
        }
    }
}