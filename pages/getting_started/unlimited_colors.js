import React from 'react';
import Img from '../../component/Img';

const unlimited_colors = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h4 className='main-title' id='unlimited-colors'>
          Unlimited Colors
        </h4>
      </div>
      <p>To try different color combinations we have provided a color selector so that you could tweak the colors are per your needs and from the theme itself and when you are satisfied with the changed color, you can set the primary and secondary color in the scss file.</p>
      <div className='d-flex justify-content-center align-items-center'>
        <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/colorSelector.png' alt='' />
      </div>
      <p>Select the primary and secondary colors and click on apply, the page with load with you selected colors. And even after messing around with the color you like the default color combination, press reset button to make revert to the default colors.</p>
      <p>If you are wondering how the colors change, then in the style property of the html tag we change the css variables as per the selected color. That will change the primary and secondary colors through out the theme.</p>
      <ul>
        <li>
          {' '}
          <strong>--theme-deafult</strong> value in the style property in html tag to change the primary color. change <strong>--theme-deafult</strong> value in the style property in html tag to change the primary color.
        </li>
        <li>
          {' '}
          <strong>--theme-secondary</strong> value in the style property in html tag to change the secondary color. change <strong>--theme-secondary</strong> value in the style property in html tag to change the secondary color.
        </li>
      </ul>
    </div>
  );
};

export default unlimited_colors;
