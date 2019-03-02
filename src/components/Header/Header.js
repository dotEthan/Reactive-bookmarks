import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css';

const header = (props) => {

    return (
        <div className="navbar">
            <div className="logo">BookyMarked</div>
            <div className="nav">
                <ul className="navUl">
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to='/bookmarks'>Bookmarks</NavLink></li>
                    <li><NavLink to='/manage'>Manage</NavLink></li>
                    <li onClick={props.delete}>Delete</li>
                    <li onClick={props.save}>Save</li>
                </ul>
            </div>
        </div>
    );
}

export default header;