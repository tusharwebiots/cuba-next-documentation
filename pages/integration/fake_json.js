import React from 'react';
import Img from '../../component/Img';

const FakeJson = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='main-title'> FakeJson</h1>
        {/* <p> we are make fully dynamic theme , we are make fake json and import and all data use like a api res !! if you want to use api in our theme is </p> */}
        <p>Our main motive is that you make your dream website with minimum efforts.And for that reason we have made fake json !! </p>
        <p>Fake json looks similar to how api's response would look. </p>
        <p>You just need to make changes in fake json and you can see the changes accordingly in your theme</p>
        <p>
          If you want to access data from a backend that you have made,you can do that by fetching the data from the api that you have created and provide it instead of our fake JSON. But make sure
          that the format in which you receive the data is same as the format in out fake JSON.{' '}
        </p>
        <Img className='img-border img-fluid' src='/assets/images/fakejson.png' alt='img1' />

        <p>
          We are showing all data dynamically in our theme through fake json as you can see in below image. Now if you want modify the data you want to show, you just need to make changes in the json
          or in the response of your API.
        </p>
        <Img className='img-border img-fluid' src='/assets/images/fakeJsonImport.png' alt='img1' />
      </div>
    </div>
  );
};

export default FakeJson;
