import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';

const Img = (props) => {
  return (
    <Gallery>
      <Item original={props.src}>
        {({ ref, open }) => (
          <div className='d-flex justify-content-center align-items-center' ref={ref} onClick={open}>
            <img className='img-fluid mb-3 img-border img-80' {...props} alt='' />
          </div>
        )}
      </Item>
    </Gallery>
  );
};

export default Img;
