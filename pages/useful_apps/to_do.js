import React from 'react';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const ToDo = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h4 className='sub-title title-with-link' id='toDo'>
          To-Do
          <DemoButton preview='https://cuba-nextjs.vercel.app/app/todo-app' />
        </h4>
        <p>
          As an admin there are many tasks one have to keep in mind. To keep track of all those tasks, a to-do application has been provided. All the functionalities that a to-do application requires
          has been already given so the user doesn't have to download and install any other application.
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <Img className='img-border img-fluid' src='/assets/images/apps/to-do.gif' alt='img1' />
        </div>
        <p>
          Below link takes you to the design of the application, but it is just the design, data won't be stored anywhere, if you reload the page you will notice that changes will be gone. You can
          store and modify the todo list by storing it in the database of your liking.
        </p>
      </div>
    </div>
  );
};

export default ToDo;
