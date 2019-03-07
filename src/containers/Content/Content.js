import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Content.css';
import ContentSidebar from '../../components/ContentSidebar/ContentSidebar';
import ContentMain from '../../components/ContentMain/ContentMain';
import Uploader from '../../components/Uploader/Uploader';
import Bookmarks from '../Bookmarks/Bookmarks';
import * as fromActions from '../../store/actions/index';
import Auth from '../Auth/Auth';

class Content extends Component {

    render() {
        // Just the bookmark props, not 
        const bookmarkProps = this.props;
        return (
            <div className="Content">
                <ContentSidebar />
                <Route path="/" exact component={ContentMain} />
                <Route path="/uploads" component={Uploader} />
                <Route path="/bookmarks" render={() => <Bookmarks payload={bookmarkProps} />} />
                {/* <Route path="/bookmarks" render={() => <Bookmarks payload={bookmarkProps} />} /> */}
                <Route path="/login" component={Auth} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        bookmarks: state.bms.bookmarks,
        userId: state.auth.userId,
        loggedIn: state.auth.loggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBookmarksHandler: (result) => dispatch(fromActions.fetchBookmarks(result)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));

