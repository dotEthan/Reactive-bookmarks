import React, { Component } from 'react';

import classes from './App.module.css';
import Bookmarks from '../components/Bookmarks/Bookmarks';
import Uploader from '../components/Uploader/Uploader';
import Header from '../components/Header/Header';

class App extends Component {
  state = {
    titles: [
      { id: 0, title: 'Title 1' },
      { id: 1, title: 'Title 2' },
      { id: 2, title: 'Title 3' },
    ],
    showBookmarks: true,
    changeCounter: 0
  }

  titleChangeHandler = (e, id) => {
    const titleIndex = this.state.titles.findIndex(bookmark => {
      return bookmark.id === id;
    });

    const bookmark = {
      ...this.state.titles[titleIndex]
    };

    bookmark.title = e.target.value;

    const bookmarks = [...this.state.titles];
    bookmarks[titleIndex] = bookmark;

    this.setState({
      titles: bookmarks,
      changeCounter = this.state
    })
  }

  toggleBookmarksHandler = () => {
    const show = this.state.showBookmarks
    this.setState({ showBookmarks: !show })
  }

  deleteBookmarkHandler = (clickedBookmark) => {
    const titlesState = this.state.titles;
    titlesState.splice(clickedBookmark, 1);
    this.setState({
      titles: titlesState
    })
  }

  render() {
    let bookmarks = null;

    if (this.state.showBookmarks) {

      bookmarks = (
        <div className={classes.bookmarksContain}>
          <Bookmarks
            titles={this.state.titles}
            click={this.deleteBookmarkHandler}
            change={this.titleChangeHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Header />
        <Uploader
          showing={this.state.showBookmark}
          click={this.toggleBookmarksHandler} />
        {bookmarks}
      </div>
    );
  }
}

export default App;

