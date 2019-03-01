import React from 'react';

import Bookmark from './Bookmark/Bookmark';

const bookmarks = (props) => props.titles.map((bookmark, i) => {
    return <Bookmark
        key={bookmark.id}
        title={bookmark.title}
        click={() => props.click(i)}
        changed={(e) => props.change(e, bookmark.id)} />
});

export default bookmarks;