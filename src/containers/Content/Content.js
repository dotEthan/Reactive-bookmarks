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
        // console.log("Content ", this.props.ctr);
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
        bookmarks: state.bms.bookmarks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch(fromActions.increment(10)),
        fetchBookmarksHandler: (result) => dispatch(fromActions.fetchBookmarks(result)),
        DeleteResultHandler: (id) => dispatch(fromActions.deleteBookmark(id))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));

