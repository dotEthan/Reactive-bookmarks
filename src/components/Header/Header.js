import React from 'react';
import { connect } from 'react-redux';

import RealNav from './RealNav/RealNav';
import TestModeMenu from './TestModeMenu/TestModeMenu';
import * as fromActions from '../../store/actions/index';

import './Header.css';

const header = (props) => {

    return (
        <div className="navbar">
            <div className="logo">BookyMarked</div>
            <div className="nav">
                {(props.testMode) ? <TestModeMenu clicked={props.testModeToggleHandler} /> : <RealNav loggedIn={props.loggedIn} logout={props.logout} loggedIn={props.loggedIn} />}
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        testModeToggleHandler: () => dispatch(fromActions.toggleTestMode()),
    };
};

export default connect(null, mapDispatchToProps)(header);