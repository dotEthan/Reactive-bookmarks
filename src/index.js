import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

axios.interceptors.request.use(request => {
    // console.log('Interceptor request', request);
    return request;
}, error => {
    // console.log('Interceptor request', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // console.log('Interceptor Response', response);
    return response;
}, error => {
    // console.log('Interceptor Response', error);
    return Promise.reject(error);
});

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('middleware : ', action);
            const result = next(action);
            console.log('Middleware 2:', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
