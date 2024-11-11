import React from 'react';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const BookmarkSearch = () => {
  return (
    <div id='row'>
      <h4 className='sub-title title-with-link' id='bookmarkSearch'>
        Bookmark Search
        <DemoButton preview='https://cuba-nextjs.vercel.app/dashboard/default' />
      </h4>
      <p>
        There will are numerous pages in this theme, and it might be a bit difficult to navigate arround. To solve this we have added bookmark app, where you can bookmark the pages you visit the most
        within the theme, and quickly access them.
      </p>
      <div className='d-flex justify-content-center align-items-center'>
        <Img className='img-border img-fluid' src='/assets/images/apps/bookmark-search.gif' alt='img1' />
      </div>
    </div>
  );
};

export default BookmarkSearch;
