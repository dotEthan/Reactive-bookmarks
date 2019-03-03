import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Content.css';
import ContentSidebar from '../../components/ContentSidebar/ContentSidebar';
import ContentMain from '../../components/ContentMain/ContentMain';
import Uploader from '../../components/Uploader/Uploader';
import Bookmarks from '../Bookmarks/Bookmarks';
import * as actionTypes from '../../store/actions';

class Content extends Component {

    render() {
        // console.log("Content ", this.props.ctr);
        const bookmarkProps = this.props;
        return (
            <div className="Content">
                <ContentSidebar />
                <Route path="/" exact component={ContentMain} />
                <Route path="/uploads" component={Uploader} />
                <Route path="/bookmarks" render={() => <Bookmarks payload={bookmarkProps} />} />
                {/* <Route path="/uploads" component={Uploader} /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({ type: actionTypes.INCREMENT, payload: { value: 10 } }),
        storeResultHandler: (result) => dispatch({ type: actionTypes.STORE_RESULT, payload: { result: result } }),
        DeleteResultHandler: (id) => dispatch({ type: actionTypes.DELETE_RESULT, payload: { resultId: id } })
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));

