import Link from 'next/link';
import React from 'react';

const GettingStarted = () => {
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <h4 className='main-title' id='gettingStarted'>
          Getting Started
        </h4>
      </div>
      {/* Getting Started */}
      <div className='alert-box alert alert-primary'>
        <p className='mt-0'>
          Cuba Next Typescript Admin Theme is pure Next Typescript theme, Yes! you read correct, it's <b>No Jquery</b> Next Typescript admin theme including next-auth all feature and functionality with ease of integration for your project. Cuba theme documentation will help you to understand Next Typescript from scratch for making your own perfect real time dream application.
        </p>
        <p>
          Follow the documentation carefully to solve your issues in minutes. Apart from that if you don't find solution of you problem in here then you can raise a support ticket for your issue at
          <a href='https://support.pixelstrap.com/' target='_blank' rel='noreferrer' className='ps-1'>
            <b>support.pixelstrap.com</b>
          </a>
        </p>
        <p className='m-2'>
          {' '}
          <strong>Dependencies </strong>
          <strong>Dependencies </strong>
        </p>
        <ul className='mb-0'>
          <li>Next 13</li>
          <li>Bootstrap 5</li>
          <li>SCSS</li>
        </ul>
      </div>
      <p>This Documentation will guide you through all the concepts used in the theme and hopefully answer all your queries. Below are the things that you are going to find in this documentation.</p>
      {/* Folder Structure: */}
      <div>
        <Link href='/getting_started/folder_structure'>
          <a>
            <h5 className='inner-sub-title' id='folderStructure'>
              Folder Structure:
            </h5>
          </a>
        </Link>
        <p>Before starting any project, it is very important to set a folder structure. It helps us organise our code neatly and makes it easier for the future developers to modify anything in the theme.</p>
        <p>Make sure that you go through the explaination of folder structure used in our theme, it will become easier for you to make any modifications. If you want , you could follow our folder structure in you project , that way if you encounter any difficulties in your project , you can refer our theme.</p>
      </div>
      {/* Installation Guide: */}
      <div>
        <Link href='/getting_started/installation'>
          <a>
            <h5 className='inner-sub-title' id='installationGuide'>
              {' '}
              Installation Guide:
            </h5>
          </a>
        </Link>
        <p>To make sure that you can setup your project smoothly, we have provided an Installation guide for you to follow. This Installion guide contains everything from installing node till running your project. Do not miss any steps while creating a new project or else you might have to start over again.</p>
      </div>
      {/* Theme Layouts: */}
      <div>
        <Link href='/getting_started/theme_layouts'>
          <a>
            <h5 className='inner-sub-title' id='themeLayout'>
              {' '}
              Theme Layouts:
            </h5>
          </a>
        </Link>
        <p>With multiple customization options , we can create many different page layouts. Its upto your imagination, how you use the options and implement them in your website. But to give you a starting point, we have used all the available customization options and made a few different layouts. You can use them to get some inspiration for you own website or use them as they are.</p>
      </div>
      {/* Theme Customizer: */}
      <div>
        <Link href='/getting_started/sidebar_options'>
          <a>
            <h5 className='inner-sub-title' id='themeCustomizer'>
              Theme Customizer:
            </h5>
          </a>
        </Link>
        <p>To make your theme look unique and as per you taste, we have provided theme customizer, through which you can make changes according to your preference within the theme. And we have also provided a guide on how the customizer works. You can refer it to make your own custom changes.</p>
        <ol>
          <li>
            <Link href='/getting_started/layout_types'>
              <a>Layout Types</a>
            </Link>
          </li>
          <li>
            <Link href='/getting_started/sidebar_options'>
              <a>Sidebar Options</a>
            </Link>
          </li>
          <li>
            <Link href='/getting_started/unlimited_colors'>
              <a>Unlimited Colors</a>
            </Link>
          </li>
          <li>
            <Link href='/getting_started/mix_layout'>
              <a>Mixed Layout</a>
            </Link>
          </li>
        </ol>
      </div>
      {/* Sidebar: */}
      <div>
        <Link href='/getting_started/sidebar_options'>
          <a>
            <h5 className='inner-sub-title' id='sidebar'>
              Sidebar:
            </h5>
          </a>
        </Link>
        <p>To navigate through the website, a sidebar is must. But with increasing page , number of lines required to display all the links in sidebar increases rapidly. To make it shorter we have used looping concepts. You can refer our guide to sidebar to learn more about how our code logic works.</p>
      </div>
      {/* Dark Layout: */}
      <div>
        <Link href='/getting_started/dark'>
          <a>
            <h5 className='inner-sub-title' id='darkLayout'>
              Dark Layout:
            </h5>
          </a>
        </Link>
        <p>It is essential for us to maintain good user experience, and even when they are browsing through your website at night, that experience should not be ruined just because your website is too bright. To make sure our user gets the best experience at any time of the day, we have added the dark mode. Go through our Guide to dark layout to know more about it.</p>
      </div>
      {/* SCSS Structure: */}
      <div>
        <Link href='/getting_started/scss_structure'>
          <a>
            <h5 className='inner-sub-title' id='scssStructure'>
              SCSS Structure:
            </h5>
          </a>
        </Link>
        <p>When the theme is this big, there is a vast amount of style written. To organise such amount of code , a proper folder structure becomes necessary. This way it becomes easier for us to find and modify styles of a component without much hassle. You could refer to our explaination on the scss folder structure and use it in your project to keep your styles more managed.</p>
      </div>
      {/* Creating New Page: */}
      <div>
        <Link href='/getting_started/create_new_page'>
          <a>
            <h5 className='inner-sub-title' id='creatingNewPage'>
              Creating New Page:
            </h5>
          </a>
        </Link>
        <p>When you have completed setting up your project, you might require to add more pages. A short guide on how to create new pages have been given in this documentation. You can refer it and start adding your own pages.</p>
      </div>
      {/* Routing Guide: */}
      <div>
        <Link href='/getting_started/routing'>
          <a>
            <h5 className='inner-sub-title' id='routingGuide'>
              Routing Guide:
            </h5>
          </a>
        </Link>
        <p>One of the most important things in any Next  site is routing. Without it your website cannot run. It is responsible for creating paths for our website pages and attaching components to show to those paths. An extensive guide has been made on this topic, go through it and follow the given steps to make you own routes.</p>
      </div>
      {/* useContext Hook Guide: */}
      <div>
        <Link href='/getting_started/useContext_hook'>
          <a>
            <h5 className='inner-sub-title' id='useContext'>
              {' '}
              useContext Hook Guide:
            </h5>
          </a>
        </Link>
        <p>
          There are multiple elements in this website that are dependent on each other, when the state of one element or component changes then according to that other component might have to change as well. For that we can keep emiting event till we reach the common parent components and pass props through it. But when having multiple levels of parent-child relationship this process becomes very difficult to implement. To tackle this problem useContext Hook has been provided. And this is the most powerful part of our theme. We have not used any third-party packages or libraries for managing the global state. To know more about it refer our
          <Link href='/getting_started/useContext_hook'>
            <a>
              <span> useContext Hook Guide.</span>
            </a>
          </Link>
        </p>
      </div>
      {/* Redux Guide: */}

      {/* Loader: */}
      <div>
        <Link href='/getting_started/loader'>
          <a>
            <h5 className='inner-sub-title' id='loader'>
              Loader:
            </h5>
          </a>
        </Link>
        <p>Content of the website takes some time to load when the website is fetching the data from an api or loading a vast amount of styles. This delay can become a reason for user's bad experience with your website. To avoid this we have added a loader. When the content is loading in the background we could just show loader to indicate that our content is still loading. Have a look at our loader guide to see how we have implemented loader logic in our theme.</p>
      </div>
      {/* Multi Language Guide: */}
      <div>
        <Link href='/getting_started/multi_language'>
          <a>
            <h5 className='inner-sub-title' id='multiLanguage'>
              {' '}
              Multi Language Guide:
            </h5>
          </a>
        </Link>
        <p>We will have many users accross the world, and they will be comfortable reading through your website if the language used is their native language. Multiple languages functionality has been provided so according to the users you can implement options for many different languages.</p>
      </div>
      {/* Components: */}
      <div>
        <Link href='/components/basic_ui_elements'>
          <a>
            <h5 className='inner-sub-title' id='components'>
              Components:{' '}
            </h5>
          </a>
        </Link>
        <p>
          A good practise while coding is to
          <span> Never Repeat Your Code</span>. Which means once you write some lines of code, you should avoid writing same lines of code somewhere else. Make those lines of code in such a way that you can you it multiple times throughout your website. We have created such components and given a detialed explaination about them. Make sure to go throught it.
        </p>
      </div>
      {/* Apps: */}
      <div>
        <Link href='/useful_apps/e_commerce'>
          <a>
            <h5 className='inner-sub-title' id='apps'>
              Apps:
            </h5>
          </a>
        </Link>
        <p>
          {' '}
          <strong>Chat Application , To-Do application, Email Application</strong>
          To manage admin side functionalities we have created a few different apps like <strong>Chat Application , To-Do application, Email Application</strong>
          etc... To find out what other applications we have provided , see our Apps Guide.
        </p>
      </div>
    </div>
  );
};

export default GettingStarted;
