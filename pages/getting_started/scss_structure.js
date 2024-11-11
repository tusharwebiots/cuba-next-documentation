import React from 'react';

const ScssStructure = () => {
  return (
    <div className='row'>
      <div id='folder-structure' className='col-sm-12'>
        <h4 className='main-title'>Scss folder Structure</h4>
        <p>We have used scss for styling the website, as it makes the development process fast and convenient for the developers. Below given is a detailed explanation of the scss folder structure, so that if you want to make any changes in your personal theme then you can make changes easily.</p>
        <p>
          You can find scss folder on the following path: <strong> theme&gt;public&gt;assets&gt;scss </strong>
          
        </p>

        <h4 className='sub-title' id='explanation'>
          Explanation:
        </h4>
        <p>We have created a folder structure that is easy to understand and modify. And here is the explanation for each folder.</p>
        <h5 className='inner-sub-title'>Base Folder</h5>
        <p>In this folder there are only two files: reset.scss and typography.scss.</p>
        <p>
          {' '}
          <strong>reset.scss</strong> file, as its name says, is made to reset the styling of the pages to start working on it. When we import bootstrap then there are some style which we need to overwrite globally, those overwrites are done here so that we do not have to modify individual components.
          <strong>reset.scss</strong> file, as its name says, is made to reset the styling of the pages to start working on it. When we import bootstrap then there are some style which we need to overwrite globally, those overwrites are done here so that we do not have to modify individual components.
        </p>
        <p>
          {' '}
          <strong>button tag, anchor tag, paragraph tag </strong>. This makes the theme more attractive as the style is common throughout.
          <strong>typography.scss</strong> file has been made to give the default styles to all the commonly used tags through out the theme, like : <strong>button tag, anchor tag, paragraph tag </strong>. This makes the theme more attractive as the style is common throughout.
        </p>
        <p className='warning-block'>
          {' '}
          <strong>Note:</strong>
          <strong>Note:</strong>
          Make sure that the path you enter in the json is same as the one that you have given in the router, or else error will be thrown as same path will not be found.
        </p>
        <h4 className='sub-title' id='components'>
          Components Folder
        </h4>
        <p>As the name suggests, this folder contains styles for all the components that we have made and used multiple times in the theme.</p>
        <p>
          Components like <strong>accordion, alerts, badges, forms, loaders </strong>etc.. are used numerous times and it is essential that we keep the designs of these components to make the theme look more aesthetic.
          <strong>accordion, alerts, badges, forms, loaders </strong>etc.. are used numerous times and it is essential that we keep the designs of these components to make the theme look more aesthetic.
        </p>
        <p>If you want to add you custom style to any component, files names are given according to the components so that it is easy for you to find the file and modify it.</p>
        <h4 className='sub-title' id='layout'>
          Layout Folder
        </h4>
        <p>
          There are many different components like <strong> rtl </strong>and <strong>box layout </strong> are also included in this folder.
          <strong> header, sidebar, footer </strong> that are common in all pages of the theme. We have gathered all styles of those components here which includes in making of a web-page. Styles for <strong> rtl </strong>and
          <strong>box layout </strong> are also included in this folder.
        </p>
        <p>If you wish to make any changes in design on header, footer, sidebar or in the design of rtl and dark modes, look for the files in this folder to modify.</p>

        <p>If you wish to make any changes in design on header, footer, sidebar or in the design of rtl and dark modes, look for the files in this folder to modify.</p>
        <h4 className='sub-title' id='pages'>
          Pages Folder
        </h4>
        <p>
          Styles of the pages that you might need to create your own website are given here. All the basic pages like <strong> blog, contact page, faq , gallery </strong> and many more are the common amongst every website.
          <strong> blog, contact page, faq , gallery </strong> and many more are the common amongst every website.
        </p>
        <p className='warning-block'>
          {' '}
          <strong>Note:</strong>
          <strong>Note:</strong>
          If you take these pages to add in your website then make sure you add the style from these files as well.
        </p>
        <h4 className='sub-title' id='theme'>
          Theme Folder
        </h4>
        <p>This folder contains styles for those pages responsible for customizing theme. Like changing layout to dark mode or any other customization.</p>
        <p>
          {' '}
          <strong>responsive.scss</strong>
          Code that make the website responsive has been also added here in this folder named <strong>responsive.scss</strong>
        </p>
        <h4 className='sub-title' id='utils'>
          Utils Folder
        </h4>
        <p>This folder is created to contain all the utility files that we might require while making designs for the theme.</p>
        <p>
          {' '}
          <strong>variables.scss</strong> file. Variables file contains all the scss variables for colors, fontsize and other scss properties. We do this so that whenever there are any changes in the layout like making it in dark mode, we can easily change the color variable to render changes where these variables are used. Here we only require variables as utilities so this folder only contains <strong>variables.scss</strong> file. Variables file contains all the scss variables for colors, fontsize and other scss properties. We do this so that whenever there are any changes in the layout like making it in dark mode, we can easily change the color variable to render changes where these variables are used.
        </p>
        <p>If you want to change the deafult-primary color of the website you can make changes in variables.scss files.</p>
        <h4 className='sub-title' id='vendors'>
          Vendors Folder
        </h4>
        <p>We have used plugins to give you give a better user experience. And for those plugins to be functional and look attractive these files in vendors are necessary.</p>
        <p className='warning-block'>
          {' '}
          <strong>Note:</strong>
          <strong>Note:</strong>
          Making any changes in these files may result in breaking the plugins. So please avoid making and changes in these files, but if you are using the plugins in your website then make sure to import them in your project.
        </p>
      </div>
    </div>
  );
};

export default ScssStructure;
