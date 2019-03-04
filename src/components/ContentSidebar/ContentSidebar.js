import React from 'react';
import { NavLink } from 'react-router-dom';

import './ContentSidebar.css';

const contentSidebar = props => {
    return (
        <div className="contentSidebar">
            <ul className="sidebarList">
                <li><NavLink to='/' exact>Home</NavLink></li>
                <li><NavLink to='/uploads'>Upload</NavLink></li>
                <li><NavLink to='/bookmarks'>Bookmarks</NavLink></li>
                <li><NavLink to='/tags'>Tags</NavLink></li>
                <li><NavLink to='/keywords'>Keywords</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
            </ul>
        </div>
    );
}

export default contentSidebar;