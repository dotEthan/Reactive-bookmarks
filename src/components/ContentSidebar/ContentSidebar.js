import React from 'react';
import { NavLink } from 'react-router-dom';

import './ContentSidebar.css';

const contentSidebar = props => {
    return (
        <div className="contentSidebar">
            <ul className="sidebarList">
                <li><NavLink to='/' exact>Home</NavLink></li>
                <li><NavLink to='/uploads' exact>Upload</NavLink></li>
                <li><NavLink to='/bookmarks' exact>Bookmarks</NavLink></li>
                <li><NavLink to='/tags' exact>Tags</NavLink></li>
                <li><NavLink to='/keywords' exact>Keywords</NavLink></li>
            </ul>
        </div>
    );
}

export default contentSidebar;