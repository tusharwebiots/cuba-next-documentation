import React from 'react';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const ThemeLayouts = () => {
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <h4 className='main-title' id='layoutSetting'>
          Theme Layouts
        </h4>
        <h4 className='sub-title' id='pages'>
          Pages
        </h4>
        <p>We have pre-made multiple layout using all available customization options. Have a look at them and choose the combinations you like. You can also mix few layouts yourself and create your own designs.</p>
        <p>To View these layout, we have provided layout settings on the right side of the page. Click on the first icon, there you will find all the different layouts, named by the popular cities of the world.</p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/quickOptions.png' alt='' />
        </div>
        <p>Layouts changes as the classes in the below given div tag changes.</p>
        <p>&lt;div className="page-wrapper LAYOUT_CLASSES_HERE"&gt;...&lt;/div&gt;</p>
        <h4 className='sub-title' id='dubai'>
          Dubai:
        </h4>
        <p>Starting with the "Dubai" layout, it is the default layout we have used in our theme. Being simple and attractive, it serves the purpose of providing all essential components like sidebar and header all at one place, visible to the user.</p>
        <p>
          {' '}
          <strong>'page-wrapper compact-wrapper'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper compact-wrapper'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_dubai.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=dubai'} />
        <h4 className='sub-title' id='london'>
          London:
        </h4>
        <p>Next comes "London" layout. Without any sidebar or header, it is a perfect layout when you do not want any cluster in your page. You could use this layout while creating dashboard pages to show some graphical data.</p>
        <p>
          {' '}
          <strong>'page-wrapper only-body'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper only-body'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_london.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=london'} />
        <h4 className='sub-title' id='seoul'>
          Seoul:
        </h4>
        <p>"Seoul" layout is similar to the Dubai layout, the difference here is that the sidebar is detached from the side of the screen and the header.</p>
        <p>
          {' '}
          <strong>' page-wrapper compact-wrapper modern-type'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>' page-wrapper compact-wrapper modern-type'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_seoul.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=seoul'} />
        <h4 className='sub-title' id='losAngeles'>
          Los Angeles:
        </h4>
        <p>
          {' '}
          <strong>Boxed Layout</strong> with "Los Angeles" design. By shifting sidebar to the top of the page and changing the amount of space that content occupies, it gives us a unique page layout format. Here comes the implementation of <strong>Boxed Layout</strong> with "Los Angeles" design. By shifting sidebar to the top of the page and changing the amount of space that content occupies, it gives us a unique page layout format.
        </p>
        <p>
          {' '}
          <strong>'page-wrapper horizontal-wrapper material-type'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper horizontal-wrapper material-type'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_los_angeles.png' alt='' />
        </div>

        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=losangeles'} />
        <h4 className='sub-title' id='paris'>
          Paris:
        </h4>
        <p>After messing around with different positions to place the sidebar, in "Paris" Layout we mess with colors. Sidebar has been given a dark background color with a bright and vibrant foreground.</p>
        <p>
          {' '}
          <strong>'page-wrapper compact-wrapper dark-sidebar'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper compact-wrapper dark-sidebar'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_paris.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/app/map/leafletmap?layout=paris'} />
        <h4 className='sub-title' id='tokyo'>
          Tokyo:
        </h4>
        <p>If you need show more space for your page content and less for the sidebar. This layout is the one you want to choose. We have made the sidebar a bit compact to provide more space for the rest of the page.</p>
        <p>
          {' '}
          <strong>'page-wrapper compact-sidebar'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper compact-sidebar'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_tokyo.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/app/map/leafletmap?layout=tokyo'} />
        <h4 className='sub-title' id='madrid'>
          Madrid:
        </h4>
        <p>Similar to the Paris layout, "Madrid" layout comes with the dark sidebar. But contrast between the background and foreground color is a bit lower than the paris layout. This setting make it easier for the eyes to transition between the sidebar and page content by keeping the dark setting for the sidebar.</p>
        <p>
          {' '}
          <strong>'page-wrapper compact-wrapper color-sidebar'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper compact-wrapper color-sidebar'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_madrid.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=madrid'} />
        <h4 className='sub-title' id='moscow'>
          Moscow:
        </h4>
        <p>If you liked the tokyo layout but think that "Those text below the icons are not looking good, I just want the icons", we have made your wish come true. In "Moscow" layout, we have removed all text from the visible sidebar and kept just the icons.</p>
        <p>
          {' '}
          <strong>'page-wrapper compact-sidebar compact-small'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper compact-sidebar compact-small'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_mascow.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=moscow'} />
        <h4 className='sub-title' id='newYork'>
          New York:
        </h4>
        <p>Fan of the boxed layout but also want sidebar with it? Look no further, "New York" layout is made for you. Along with the boxed-layout , we made sure that sidebar is also visible.</p>
        <p>
          {' '}
          <strong>'page-wrapper compact-wrapper box-layout'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper compact-wrapper box-layout'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_newyork.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=newyork'} />
        <h4 className='sub-title' id='singapore'>
          Singapore:
        </h4>
        <p>Okay so you don't like the boxed layout, and nor you want the navigation links on the side. Yup, we made that combination as well. Just copy the classes and use it. We have also fixed the header at the top,so that the user won't have to scroll all the way to top for navigating to other pages.</p>
        <p>
          {' '}
          <strong>'page-wrapper horizontal-wrapper enterprice-type'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper horizontal-wrapper enterprice-type'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_singapore.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=singapore'} />
        <h4 className='sub-title' id='rome'>
          Rome:
        </h4>
        <p>With the totally different header and using the concept of the boxed layout, we have kept just the page content in the boxed layout, creating a type of 3d effect. To make the effect more convincing we have kept the compact sidebar with only icons visible.</p>
        <p>
          {' '}
          <strong>'page-wrapper compact-sidebar compact-small material-icon'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper compact-sidebar compact-small material-icon'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_rome.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/dashboard/default?layout=rome'} />
        <h4 className='sub-title' id='barcelona'>
          Barcelona:
        </h4>
        <p>If the header is in the way on scroll when you are using singapore layout, we have removed the fixed header in the "Barcelona" layout. If your page content is short then this layout will work for you.</p>
        <p>
          {' '}
          <strong>'page-wrapper horizontal-wrapper enterprice-type advance-layout'.</strong>
          The Classes that needs to be added the above mentioned div are <strong>'page-wrapper horizontal-wrapper enterprice-type advance-layout'.</strong>
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/layout_barcelona.png' alt='' />
        </div>
        <DemoButton link={'https://cuba-nextjs.vercel.app/app/map/leafletmap?layout=barcelona'} />
      </div>
    </div>
  );
};

export default ThemeLayouts;
