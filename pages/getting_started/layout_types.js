import React from 'react';
import Img from '../../component/Img';

const RTL = () => {
  return (
    <div className='row'>
      <div className='col-12 '>
        <h1 className='main-title' id='layout-types'>
          Layout Types
        </h1>
        <p>To make this theme according to your preferences we have provided a customizer bar, where you can tweak colors and layout type of the page, primary and secondary colors of the theme, and the layout of the sidebar. We have also provided a configure button from where you can copy the settings and paste in the layout.json file and get the customised layout by as the default layout.</p>
        <p>You can find Theme customizer on the right side of every page.</p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/themeCustomizer.png' alt='' />
        </div>
        <hr />
        <p>There are multiple customizations, we will talk about all individually.</p>
        <h4 className='sub-title mt-0'>Layout Type:</h4>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layoutType.png' alt='' />
        </div>
        <p>
          There are 3 layout types in our theme: <strong> LTR,RTL and Boxed layout</strong>.<strong> LTR,RTL and Boxed layout</strong>.
        </p>
        <p className='warning-block mt-3'>
          {' '}
          <strong>Info:</strong> Why RTL &amp; LTR? Through out the world, there are many languages and some of them are written from right to left. So taking that into consideration we have given the option to change to Right To Left mode.
          <strong>Info:</strong> Why RTL &amp; LTR? Through out the world, there are many languages and some of them are written from right to left. So taking that into consideration we have given the option to change to Right To Left mode.
        </p>
        <ul>
          <li>
            <h5 className='inner-sub-title mb-2' id='ltr'>
              LTR :
            </h5>
            <p>will show content from left to right.</p>
            <div className='d-flex justify-content-center align-items-center'>
              <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_dubai.png' alt='' />
            </div>
          </li>
          <li>
            <h4 className='inner-sub-title mb-2' id='rtl'>
              RTL:
            </h4>
            <p>
              {' '}
              <strong> Arabic , Urdu , Persian </strong> etc.. are written from right to left. For the users using these languages rtl option is provided. Languages like <strong> Arabic , Urdu , Persian </strong> etc.. are written from right to left. For the users using these languages rtl option is provided.
            </p>

            <div className='d-flex justify-content-center align-items-center'>
              <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_dubai_rtl.png' alt='' />
            </div>
          </li>
          <li>
            <h4 className='inner-sub-title mb-2' id='boxed'>
              Boxed:
            </h4>
            <p>If you want to be more creative , you can integrate the boxed layout in your website, to attract the focus of the user on the content.</p>
            <div className='d-flex justify-content-center align-items-center'>
              <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_dubai_boxed.png' alt='' />
            </div>
          </li>
        </ul>
        <p>To change the layout type we change the dir value in html tag through the click event on the theme-customizer icons. And according to the dir value, content style will change. Style for all the layout are given in the layouts folder, make sure to include those files in the folder if you are planning to use different layouts.</p>
        <ol>
          <li>dir='ltr' for the LTR layout.</li>
          <li>dir='rtl' for the RTL layout.</li>
          <li>dir='box-layout' for the Boxed-layout layout.</li>
        </ol>
        <p className='warning-block'>
          {' '}
          <strong>Note:</strong> Make sure to import the necessary scss files or else the styles won't apply.
          <strong>Note:</strong> Make sure to import the necessary scss files or else the styles won't apply.
        </p>
        <hr />
        <h4 className='sub-title mt-0' id='default-layout'>
          Set Default Layout Setting
        </h4>
        <p>When you are done with tweaking around with the settings of the layout and want to make those changes as the default settings, we have given a configure button on the top of the theme-customizer, click on it.</p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/configureButton.png' alt='' />
        </div>
        <p>copy the settings from the dialogbox</p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/copyLayoutSettings.png' alt='' />
        </div>
        <p>
          And paste them in the <strong> src&gt;data&gt;theme&gt;layout.json</strong> file
          <strong> src&gt;data&gt;theme&gt;layout.json</strong> file
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layoutJSON.png' alt='' />
        </div>
        <hr />
        <p className='warning-block'>
          {' '}
          <strong>Note:</strong>Please make sure to import the necessary scss files or else the styles won't apply.
          <strong>Note:</strong>Please make sure to import the necessary scss files or else the styles won't apply.
        </p>
      </div>
    </div>
  );
};

export default RTL;
