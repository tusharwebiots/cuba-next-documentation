import React from 'react';
import Img from '../../component/Img';

const SidebarOptions = () => {
  return (
    <div className='row'>
      <div className='col-12 '>
        <div className='card-header'>
          <h1 className='main-title ' id='sidebar-options'>
            Sidebar Options
          </h1>
        </div>
        <div className='card-body p-t-0'>
          <p>
            There are 2 Sidebar Settings in our theme: <strong>Horizontal sidebar and  Vertical sidebar </strong>.
          </p>
          <p>
            {' '}
            <strong>Vertical Sidebar:</strong> Shows the sidebar with default style.
            
          </p>
          <div className='d-flex justify-content-center align-items-center'>
            <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/layout_dubai.png' alt='' />
          </div>
          <h5 className='sub-title mb-2' id='border-sidebar'>
          Horizontal sidebar:
          </h5>{' '}
          Shows the Horizontal sidebar.
          <div className='d-flex justify-content-center align-items-center'>
            <Img className='img-fluid mb-3 img-border img-80' src='../assets/images/document/vue/codeSnaps/horizontalSideBar.png' alt='' />
          </div>
          
          <p>These changes are applied by changing the value of sidebar-layout property in the sidebar component.</p>
          <p>
            If you like a particular type of sidebar and want to use that one in you website, then just copy the sidebar.scss file and add the necessary class to the sidebar-layout property in <strong className='d-inline'> theme &gt; src &gt; Layout &gt; ThemeCustomizer &gt; Tabs &gt; Sidebar &gt; SidebarSettingsClass.tsx</strong> file.
          </p>
          <ul>
            <li>(e) => handleSidebarSetting("compact-wrapper") for the default sidebar.</li>
            <li>(e) => handleSidebarSetting("horizontal-wrapper") for the Horizontal sidebar.</li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SidebarOptions;
