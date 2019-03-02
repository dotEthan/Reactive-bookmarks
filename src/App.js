import React, { Component, Suspense } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import classes from './App.module.css';
import Bookmarks from './containers/Bookmarks/Bookmarks';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
// import Manage from './containers/Manage/Manage';
// import asyncComponent from './hoc/asyncComponent';
// const AsyncManage = asyncComponent(() => {
//   return import('./containers/Manage/Manage');
// });

const Manage = React.lazy(() => import('./containers/Manage/Manage'));

class App extends Component {
  state = {
    bookmarks: [
      {
        id: 0,
        title: 'javascript30.com',
        description: 'Great website for learning.',
        dateAdded: 1521420764848000,
        lastModified: 1526162074178000,
        tags: ['learning', 'javascript'],
        keyword: 'learning-javascript',
        url: 'https://javascript30.com/',
        img: 'assets/study/image3.jpg',
      },
      {
        id: 1,
        title: 'Vegan Kung Pao Chicken',
        description: 'Tasty recipe.',
        dateAdded: 1521420764848000,
        lastModified: 1526162074178000,
        tags: ['recipes', 'vegan', 'chicken'],
        keyword: 'recipe',
        url: 'https://url.com',
        img: 'assets/recipe/image1.jpg',
      },
      {
        id: 2,
        title: '10 Easy Guitar Songs',
        description: 'Some music to help you practice guitar',
        dateAdded: 1521420764848000,
        lastModified: 1526162074178000,
        tags: ['learning', 'guitar'],
        keyword: 'learning-guitar',
        url: 'https://guitar.com/',
        img: 'assets/study/image3.jpg',
      },
    ],
    selectedPost: null,
    changeCounter: 0
  }


  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 12);


        this.setState({
          bookmarks: posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  titleChangeHandler = (e, id) => {
    const titleIndex = this.state.bookmarks.findIndex(bookmark => {
      return bookmark.id === id;
    });

    const bookmark = {
      ...this.state.bookmarks[titleIndex]
    };

    bookmark.title = e.target.value;

    const bookmarks = [...this.state.bookmarks];
    bookmarks[titleIndex] = bookmark;

    this.setState({
      bookmarks: bookmarks
    })
  }

  toggleBookmarksHandler = () => {
    const show = this.state.showBookmarks
    this.setState({ showBookmarks: !show })
  }

  loadBookmarkHandler = (clickedId) => {
    this.setState({ selectedPost: clickedId });
  }

  saveStateHandler = () => {
    const data = { ...this.state.bookmarks };

    axios.post('/posts', data)
      .then(response => {
        console.log(response);
      });
  }

  deleteBookmarkHandler = () => {
    axios.delete('/posts/' + 1)
      .then(response => {
        console.log(response);
      })
  }

  render() {

    return (
      <BrowserRouter >
        <div className={classes.App}>
          <Header
            save={this.saveStateHandler}
            delete={this.deleteBookmarkHandler} />
          <Route path="/" exact component={Home} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route
            path="/manage"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Manage />
              </Suspense>
            )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

