import React, { Component } from 'react';
import './App.css';
import Bookmark from './Bookmark/Bookmark';

class App extends Component {
  state = {
    titles: [
      { id: 0, title: 'Title 1' },
      { id: 1, title: 'Title 2' },
      { id: 2, title: 'Title 3' },
    ],
    showBookmarks: true
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
      titles: bookmarks
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
        <div className="bookmarks-contain">
          {this.state.titles.map((bookmark, i) => {
            return <Bookmark
              key={bookmark.id}
              title={bookmark.title}
              click={() => this.deleteBookmarkHandler(i)}
              changed={(e) => this.titleChangeHandler(e, bookmark.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.toggleBookmarksHandler}>Switch Bookmarks</button>
        {bookmarks}
      </div>
    );
  }
}

export default App;

