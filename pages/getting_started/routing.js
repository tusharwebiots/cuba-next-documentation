import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';

const codeData = {
  routingCode: `import React from 'react';

  const AboutPage = () => {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page content.</p>
      </div>
    );
  };
  
  export default AboutPage;
  `
};

const Routing = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='main-title title-with-link' id='routing'>
          Routing in Next
          <DemoButton preview='https://cuba-nextjs.vercel.app/dashboard/default' official='https://reactrouter.com/en/main' />
        </h1>
        <p>Next.js includes built-in routing functionality, so you don't need to install an additional package like react-router-dom. To define routes and handle navigation in Next.js, you can create pages inside the pages directory. Each file in the pages directory becomes a route.</p>        
      </div>

      <p id='routerPath' className='mt-3 mb-0'>
        You can find router file on the following path:
      </p>
      
      <p>
        <code> theme &gt;&gt; src &gt;&gt; page  </code>
      </p>
      <p id='routerPath' className='mt-3 mb-0'>For example, if you want to create a page for the URL/about, create a file called about.ts inside the pages directory and define the content of the about page in that file.</p>
      <p id='routerPath' className='mt-3 mb-0'>Here's an example of a basic about.js page in Next.js:</p>
      <CodeShowCaseBox code={codeData.routingCode} lang='js' />
      <p id='routerPath' className='mt-3 mb-0'>You can create additional pages by following the same approach. Each page file you create will automatically have its own route in Next.js.</p>
      
      
      

      
      
      
      
    </div>
  );
};

export default Routing;
