import Link from 'next/link';
import React from 'react';

const DemoButton = ({ preview, official }) => {
  return (
    <>
      {/* <Link href={link}> */}
      {/* <a classNameName={`btn btn-solid ${right ? 'float-end' : ''}`} target='_blank' rel='noreferrer'>
        {name || 'Live Demo'}{' '}
      </a> */}
      <div className='d-flex gap-2 item-center'>
        {preview && (
          <Link href='/'>
            <a className='badge badge-primary-light' href={preview} target='_blank' rel='noreferrer'>
              Preview link
              <i className='fa-solid fa-arrow-up-right-from-square ms-2'></i>
            </a>
          </Link>
        )}
        {official && (
          <Link href='/'>
            <a className='badge badge-primary-light' href={official} target='_blank' rel='noreferrer'>
              Official link
              <i className='fa-solid fa-arrow-up-right-from-square ms-2'></i>
            </a>
          </Link>
        )}
      </div>
      {/* <a className='badge badge-primary-light' href='https://admin.pixelstrap.com/cuba/theme/popover.html' target='_blank' rel='noreferrer'>
          Preview link
          <i className='fa-solid fa-arrow-up-right-from-square'></i>
        </a>
      </Link> */}
    </>
  );
};

export default DemoButton;
