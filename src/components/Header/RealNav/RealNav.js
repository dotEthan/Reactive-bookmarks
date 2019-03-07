import React from 'react';
import axios from 'axios';

import { NavLink, withRouter } from 'react-router-dom';

const RealNav = (props) => {

    const saveBookmarks = () => {
        console.log('saving');
        // axios.put(`/testdata.json`, props.bookmarks)
        axios.put(`/realdata/${props.userId}.json?auth=${localStorage.getItem('token')}`, props.bookmarks)
            .then(success => console.log('Success: ', success))
            .catch(error => console.log(`Error! ERROR!: ${error}!`));
    }

    return (
        (props.loggedIn) ? (
            <ul className="navUl">
                <li>Reset Changes</li>
                <li onClick={saveBookmarks}>Save Changes</li>
                <li><NavLink to='/' onClick={props.logout}>Log Out</NavLink></li>
            </ul>
        ) : (
                <ul className="navUl">
                    <li><NavLink to='/login'>Register/Login</NavLink></li>
                </ul>
            )
    );
};

export default withRouter(RealNav);