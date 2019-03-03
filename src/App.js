import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

import classes from './App.module.css';
import Header from './components/Header/Header';
import Content from './containers/Content/Content';

class App extends Component {
  // state = {
  //   bookmarks: [
  //     {
  //       title: {
  //         elementType: 'input',
  //         elementConfig: {
  //           type: 'text',
  //           placeholder: 'Bookmark Name'
  //         },
  //         value: 'javascript30.com',
  //         validation: {
  //           valid: false,
  //           required: true
  //         },
  //       },
  //       description: {
  //         elementType: 'textarea',
  //         elementConfig: {
  //           type: 'text',
  //           placeholder: 'Bookmark Description'
  //         },
  //         value: 'Great website for learning.',
  //         validation: {
  //           valid: false,
  //           required: true
  //         },
  //       },
  //       dateAdded: {
  //         elementType: 'none',
  //         elementConfig: {
  //           type: '',
  //           placeholder: ''
  //         },
  //         value: '1521420764848000',
  //         validation: {
  //           valid: false,
  //           required: true
  //         },
  //       },
  //       lastModified: {
  //         elementType: 'none',
  //         elementConfig: {
  //           type: '',
  //           placeholder: ''
  //         },
  //         value: '1526162074178000',
  //         validation: {
  //           valid: false,
  //           required: true
  //         },
  //       },
  //       tags: {
  //         elementType: 'drop down',
  //         elementConfig: {
  //           type: '',
  //           placeholder: ''
  //         },
  //         value: ['learning', 'javascript'],
  //         validation: {
  //           valid: false,
  //           required: true
  //         },
  //       },
  //       keyword: {
  //         elementType: 'text',
  //         elementConfig: {
  //           type: 'text',
  //           placeholder: 'Keyword'
  //         },
  //         value: 'learning-javascript',
  //         validation: {
  //           valid: false,
  //           required: true
  //         },
  //       },
  //       url: {
  //         elementType: 'text',
  //         elementConfig: {
  //           type: 'text',
  //           placeholder: 'URL'
  //         },
  //         value: 'https://javascript30.com/',
  //         validation: {
  //           valid: false,
  //           required: true
  //         },
  //       },
  //       img: {
  //         elementType: 'text',
  //         elementConfig: {
  //           type: 'text',
  //           placeholder: 'Image URL'
  //         },
  //         value: 'assets/study/image3.jpg',
  //         validation: {
  //           valid: false,
  //           required: true
  //         },
  //       },
  //     },
  //   ],
  //   selectedPost: null,
  //   changeCounter: 0
  // }


  // componentDidMount() {
  //   axios.get('/posts')
  //     .then(response => {
  //       const posts = response.data.slice(0, 12);


  //       this.setState({
  //         bookmarks: posts
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // titleChangeHandler = (e, id) => {
  //   const titleIndex = this.state.bookmarks.findIndex(bookmark => {
  //     return bookmark.id === id;
  //   });

  //   const bookmark = {
  //     ...this.state.bookmarks[titleIndex]
  //   };

  //   bookmark.title = e.target.value;

  //   const bookmarks = [...this.state.bookmarks];
  //   bookmarks[titleIndex] = bookmark;

  //   this.setState({
  //     bookmarks: bookmarks
  //   })
  // }

  // toggleBookmarksHandler = () => {
  //   const show = this.state.showBookmarks
  //   this.setState({ showBookmarks: !show })
  // }

  // loadBookmarkHandler = (clickedId) => {
  //   this.setState({ selectedPost: clickedId });
  // }

  // saveStateHandler = () => {
  //   const data = { ...this.state.bookmarks };

  //   axios.post('/posts', data)
  //     .then(response => {
  //       console.log(response);
  //     });
  // }

  // deleteBookmarkHandler = () => {
  //   axios.delete('/posts/' + 1)
  //     .then(response => {
  //       console.log(response);
  //     })
  // }

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

export default App;

