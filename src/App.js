import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import classes from './App.module.css';
import Header from './components/Header/Header';
import Content from './containers/Content/Content';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authTokenCheck())
  };
};

export default connect(null, mapDispatchToProps)(App);

