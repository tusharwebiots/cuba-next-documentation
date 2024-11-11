import React from 'react';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const gallery = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h4 className='sub-title title-with-link' id='gallery'>
          Gallery
          <DemoButton preview='https://cuba-nextjs.vercel.app/app/gallery/grids' />
        </h4>
        <div id='section-1-1'>
          <p>
            There will be many situations where you want to use the images, and to present the images in more elegant manner, we have created a gallery application. You can use it to display images or
            use the effects used in the gallery application and implement in those places where you are using the images.
          </p>
          <div className='d-flex justify-content-center align-items-center'>
            <Img className='img-border img-fluid' src='/assets/images/apps/gallery.gif' alt='img1' />
          </div>
          <p>There are many different options provided in the gallery application, you can view them through the through the preview link.</p>
          <demoButton path='https://cuba-nextjs.vercel.app/app/gallery/grids' />
        </div>
      </div>
    </div>
  );
};

export default gallery;
