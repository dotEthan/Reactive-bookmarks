import React from 'react';

import './Header.css';

const header = (props) => {

    return (
        <div className="navbar">
            <div className="logo">BookyMarked</div>
            <div className="nav">
                <ul className="navUl">
                    <li>Register</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
}

export default header;