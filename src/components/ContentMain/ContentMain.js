import React from 'react';
import { connect } from 'react-redux';
import * as fromActions from '../../store/actions/index';

import './ContentMain.css';
import Button from '../UI/Button/Button';

const contentMain = props => {

    return (
        <div className="ContentMain">
            <Button disabled={props.loggedIn} btnType={'Success'} clicked={props.testModeToggleHandler}>Turn {(props.testMode) ? 'off' : 'on'} Test Mode</Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        testMode: state.bms.testMode,
        loggedIn: state.auth.loggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        testModeToggleHandler: () => dispatch(fromActions.toggleTestMode()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(contentMain);