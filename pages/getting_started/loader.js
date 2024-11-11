import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';

const Loader = () => {
  const loaderCode = `import React, { Fragment,useState,useEffect } from 'react';


const Loader = () => {

    const [show, setShow] = useState(true);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false)
            }, 1000);

        return () => {
            clearTimeout(timeout);
            }
       
    },[show]);

    return (
        <Fragment>
            <div className={\` loader-wrapper \${show ? '' : 'loderhide'} \` }>
                <div className="loader-index"><span></span></div>
                <svg>
                    <defs></defs>
                    <filter id="goo">
                    <fegaussianblur in="SourceGraphic" stdDeviation="11" result="blur"></fegaussianblur>
                    <fecolormatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo">    </fecolormatrix>
                    </filter>
                </svg>
            </div>
        </Fragment>
    );
}

export default Loader;`;

  return (
    <div className='row'>
      <div className='col-12'>
        <h4 className='main-title' id='loader'>
          Loader
        </h4>
      </div>
      <div className='card-body p-t-0'>
        <p>Sometimes content on the page take time to load, because of which the user might see the content with improper design. To avoid that we could show the loader untill the content is loaded properly.</p>
        <p>
          Below is our code for showing loader for 1 second on intial page load. This code is in the file app.vue, you can find this file on this path:
          <span className='bold'> src>Layout>Loader</span>
        </p>
        <hr />
        <CodeShowCaseBox code={loaderCode} />
        <hr />
        <p>We have added the loader div and given the animation in its scss file.</p>
        <p>
          To show and hide the loader we toggle loaderhide class through show variable. Style for the loaderhide class has been define below, it toggles display of the div between none and visible. Initially we have kept show to <span className='bold'>true</span>, but when the component is mounted we run a function which call the settimeout function. settimeout functions overwrites the value of show variable to <span className='bold'>false</span> after 1 second.
        </p>
        <p>
          If you want to make changes in the animation or the design of the loader, you can navigate to
          <span className='bold' src>
            assets > scss > components > _loader.scss
          </span>
          . Here default styles and animation has been given, make changes as per your needs.
        </p>
        <p>You can modify the timing of the loader by changing the time in settime function. Instead of 1000ms you can set any time as per your needs.</p>
        <hr />
      </div>
    </div>
  );
};

export default Loader;
