import Link from 'next/link';
import React from 'react';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const CreateNewPage = () => {
  return (
    <div className='row'>
      <div className='col-12 '>
        <h1 className='main-title title-with-link' id='create-new-page'>
          Create New Page
        </h1>
        <p>Here We will see how to create a new page.</p>
        <p>First we will create a folder inside src &gt;pages. We recommend creating files according to the structure you make in the navigation bar, this makes managing and accessing the files easier.</p>
        <p>For Example: we need to create a page inside some category and give the link in the navigation bar. Our link looks something like this: </p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/createPageNavBar.png' alt='' />
      </div>
      Now According to our sidebar we have make the folder structure. We will create "parent" folder inside src&gt;pages. And inside parent folder we create childlink1.t
      sx and childlink2.tsx files. Now that we have created our files, we need to create routes to render those pages.
      <p className='alert-box alert alert-primary mt-4'>
        {' '}
        <strong>Tip:</strong>
        <strong>Tip:</strong>
        You can find information on creating routes in our
        <Link href='http://localhost:39487/routing'>
          <a>Guide to Routing</a>
        </Link>
      </p>
    </div>
  );
};

export default CreateNewPage;
