import React, { useEffect, useRef, useState } from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';

var ApacheHTTPServer = `Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]`;

const Installation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <h4 className='main-title' id='installation'>
          Installation
        </h4>

        <p>Welcome to React Next! React Next helps you build modern web applications.</p>
        <p className='mb-4'>For getting started an React Next application you needs two things as Prerequisites.</p>
        <h4 className='sub-title' id='prerequisites'>
          Prerequisites
        </h4>
        <p className='mb-4'>
          Before you begin, make sure your development environment includes <b>Node </b>and an <b>npm package manager.</b>
        </p>
        <ol>
          <li>
            <h4>Node.js</h4>
            <p>Install Node.js using downloaded file</p>
            <p className='mb-4'>
              To check your node version, run <b>node -v </b>in a terminal/console window.
            </p>
          </li>
          <li>
            <h4>Npm package manager</h4>
            <p>CLI (command line interface), and React apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.</p>
            <p>
              This Quick Start uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run <b>npm -v </b>in a terminal/console window.
            </p>
            <p>
              For better understanding React we suggest you to once go through official documentation of React from{' '}
              <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                <b>reactjs.org</b>
              </a>
            </p>
          </li>
        </ol>
      </div>
      <div className='col-sm-12'>
        <h4 className='sub-title' id='reactSetup'>
          React Next setup
        </h4>
        <div className='warning-block mb-4'>
          <p>If you want Cuba theme setup then directly follow next Cuba setup section</p>
        </div>

        <h5 className='inner-sub-title' id='createInitial'>
          {' '}
          Create Initial application
        </h5>
        <p>Run the npm command create-react-app and provide the name my-app, as shown here:</p>
        <CodeShowCaseBox code={`npx create-next-app@latest`} />
        <p>The create-react-app command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.</p>
        <h5 className='inner-sub-title' id='serveApplication'>
          {' '}
          Serve Application
        </h5>
        <p>Go to the workspace folder (my-app).</p>
        <CodeShowCaseBox code={`cd my-app`} />
        <p>Launch the server by using the npm command npm start</p>
        <CodeShowCaseBox code={'npm run dev'} />

        <h4 className='sub-title' id='buildApplication'>
          {' '}
          Build Application
        </h4>
        <p>Build you application for host on server using below command:</p>
        <CodeShowCaseBox code={`npm run build`} />
        <p>It will create one dist file in your theme folder. Make zip of dist folder. so here you are ready to upload your theme on server.</p>
        <p>If you’re using Apache HTTP Server, you need to create a .htaccess file in the public folder by pastng below code</p>
        <CodeShowCaseBox code={ApacheHTTPServer} />
        <p> Now upload your dist folder on public folder</p>
      </div>
      <div className='col-sm-12'>
        <h4 className='sub-title' id='cubaSetup'>
          Cuba setup
        </h4>
        <p className='mb-4'>If you have already download and install node.js then ignore prerequisites accordingly.</p>
        <h5 className='inner-sub-title' id='nodejs'>
          Node.js
        </h5>
        <p>
          Download latest version of node.js from{' '}
          <a href='https://nodejs.org' target='_blank' rel='noreferrer'>
            <b>nodejs.org.</b>
          </a>
        </p>
        <p>Install Node.js using downloaded file</p>
        <p className='mb-4'>
          To check your node version, run <b>node -v </b>in a terminal/console window.
        </p>

        <h5 className='inner-sub-title' id='CubaThemeSetup'>
          Cuba Theme Setup
        </h5>
        <div class="card-body p-t-0">
        <p>First, you must download and install <code>node.js. </code>NPM stands for node packaged modules and
          is a way to manage development dependencies through Node.js.</p>
        <p>Download the Node.js source code or a pre-built installer for your platform, and start developing,
          you can download it from <a target="_blank" href="https://nodejs.org/en">anodejs.org.</a></p>
        <p>You can check it in your terminal window using these commands <code>node --version </code>and
          <code>npm --version.</code>
        </p>
        <p><a href="#">Cuba Template Setup</a>
        <ul>
          <p><i class="fa fa-angle-right me-2"></i>Download and extract an Cuba Template from themeforest                    
          </p>
          <p><i class="fa fa-angle-right me-2"></i>Extract it and then go in to Template folder.<code> cd Template</code>
          </p>
          <p><i class="fa fa-angle-right me-2"></i>Create the<code> .env.local </code> File: Inside your project root directory, create a file named <code> .env.local </code> to store environment variables execute the following command.</p>                   
          <CodeShowCaseBox code={`touch .env.local`} />
          <p><i class="fa fa-angle-right me-2"></i>Configure .env.local Variables</p>
          <p>1. For next-auth to work properly, you'll need to configure a few environment variables based on the authentication provider(s) you're using. Here's a basic example for Google OAuth, but the structure will vary slightly depending on the provider.</p>
          <p>Example Configuration for Google OAuth: <code> .env.local </code></p>
          
          <CodeShowCaseBox code={`NEXTAUTH_SECRET=your_super_secret_key
NEXTAUTH_URL=http://localhost:3000    /* can use any port */

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret`} />

          <p></p>
          <p>2. <code>NEXTAUTH_SECRET</code>: A secret key used to encrypt JWT tokens. You can generate a random string using any secret key Open your terminal in <b> mac/linux </b> and enter the following command and it will generates a random 32-character base64-encoded string using OpenSSL:</p>
          
          <CodeShowCaseBox code={`openssl rand -base64 32`} />
          <p>If your are a <b> Windows </b> user you can generate from here :<a href="https://generate-secret.vercel.app/32" target="_blank" rel="noopener noreferrer">
            <div>                      
               <b> https://generate-secret.vercel.app/32 </b> 
            </div>
          </a></p>                  
          <p>3. <code>NEXTAUTH_URL</code>: This is the URL of your application. During development, it is usually <b> http://localhost:3000 </b> In production, this will be the live domain of your website.</p>
          <p>4. Add the Authentication Provider:</p>          
          <p><i class="fa fa-angle-right me-2"></i> In your Next.js project, create a file at <code> app/api/auth/[...nextauth]/authOption.tsx (or .js for JavaScript users) </code> and add your providers. Here's an example using Google:</p>
          
             
<CodeShowCaseBox code={`import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})

export default NextAuth`} />
           
          <p>5.More details for next-auth prefer next-auth documentation  <a target="_blank" href="https://next-auth.js.org/getting-started/example"> Next-Auth-Documentation</a></p>          
          <p><i class="fa fa-angle-right me-2"></i>Import all dependency by installing npm command <code>npm install</code></p>
          <p><i class="fa fa-angle-right me-2"></i>Now you are in stage to successfully run Cuba using below command: <code>npm run dev</code></p>
        </ul>
        </p>
        <p>NPM use the package.json file and automatically install the required local dependencies listed in it.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Installation;
