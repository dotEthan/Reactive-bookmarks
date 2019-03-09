import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import classes from './App.module.css';
import Header from './components/Header/Header';
import Content from './containers/Content/Content';
import * as fromActions from './store/actions/index';

class App extends Component {

  componentDidMount() {
    if (!this.props.testMode) this.props.onTryAutoSignup();
  }

  render() {

    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header
            userId={this.props.userId}
            bookmarks={this.props.bookmarks}
            loggedIn={this.props.loggedIn}
            logout={this.props.logoutHandler}
            testMode={this.props.testMode} />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    userId: state.auth.userId,
    bookmarks: state.bms.bookmarks,
    testMode: state.bms.testMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(fromActions.authTokenCheck()),
    logoutHandler: () => dispatch(fromActions.authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

