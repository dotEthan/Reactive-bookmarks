import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './Header.css';

const header = (props) => {

    return (
        <div className="navbar">
            <div className="logo">BookyMarked</div>
            <div className="nav">
                <ul className="navUl">
                    <li><NavLink to='/'>Log Out</NavLink></li>
                    <li><NavLink to='/login'>Register/Login</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default withRouter(header);