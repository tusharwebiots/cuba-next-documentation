import React from 'react';
import Img from '../../component/Img';

const Dark = () => {
  return (
    <div className='row'>
      <div className='col-12 '>
        <div className='card-header'>
          <h1 className='main-title' id='dark'>
            Dark Layout
          </h1>
        </div>
        <div className='card-body p-t-0'>
          <p>Though it is not recommended to work on the computer in the dark , but in case the user is working in those conditions, it is essential to protect the eyes from the bright light of the screen. To make sure user has a great experience using this site, we have provided dark mode.</p>
          <p>Toggle Dark Mode by clicking on the moon icon in the header.</p>
          <div className='d-flex justify-content-center align-items-center'>
            <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/dark_mode_button.png' alt='' />
          </div>
          <p />
          <h5>How dark layout apply to the theme?</h5>
          <p>
            {' '}
            <strong>"dark-only"</strong>
            To toggle the between dark and light layout, we just have to make sure that we add <strong>"dark-only"</strong>
            class in the body tag when the dark layout is activated and remove it when it is deactivated.
          </p>
          <h6>
            {' '}
            <strong> "dark-only"</strong> class added. Layout With <strong> "dark-only"</strong> class added.
          </h6>
          <div className='d-flex justify-content-center align-items-center'>
            <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/layout_dubai_dark_layout.png' alt='' />
          </div>
          <h6>
            {' '}
            <strong> "dark-only"</strong> class added. Layout Without <strong> "dark-only"</strong> class added.
          </h6>
          <div className='d-flex justify-content-center align-items-center'>
            <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/layout_dubai.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dark;
