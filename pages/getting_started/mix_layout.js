import React from 'react';
import Img from '../../component/Img';

const MixLayout = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <div className='card-header'>
          <h4 className='main-title' id='mixed-layout'>
            Mixed Layout
          </h4>
        </div>
        <div className='card-body p-t-0'>
          <p>Using the dark/light mode functionalities, we have created a few mixed layout modes.</p>
          <div className='d-flex justify-content-center align-items-center'>
            <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/mixLayout.png' alt='' />
          </div>
          <p>In mix layout we have provided 3 options:</p>
          <ol>
            <li>Light Layout With Light Sidebar:</li>
            <li>Light Layout With dark sidebar</li>
            <li>Dark Layout With Dark Sidebar</li>
          </ol>
          <p>For applying the changes we change the value of the class property of the body tag.</p>
          <ul>
            <li>
              For
              <strong id='light'>Light Layout With Light Sidebar: </strong>
              className='light-only'
              <div className='d-flex justify-content-center align-items-center'>
                <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/layout_dubai.png' alt='' />
              </div>
            </li>
            <li>
              For
              <strong id='dark-sidebar'>Light Layout With Dark Sidebar: </strong>
              className='dark-sidebar'
              <div className='d-flex justify-content-center align-items-center'>
                <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/layout_dubai_dark_sidebar.png' alt='' />
              </div>
            </li>
            <li>
              For
              <strong id='dark'>Dark Layout With Dark Sidebar: </strong>
              className='dark-only'
              <div className='d-flex justify-content-center align-items-center'>
                <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/layout_dubai_dark_layout.png' alt='' />
              </div>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MixLayout;
