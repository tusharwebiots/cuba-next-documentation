import React from 'react';
import Img from '../../component/Img';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';

const sidebar = () => {
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <h4 className='main-title' id='sidebar'>
          Sidebar
        </h4>
        <p>There are Numerous links in sidebar and if we write whole code in html then number of lines will increase a lot. So to prevent that we have created a JSON file for the sidebar links so that we can loop through the array links and render our links accordingly.</p>
        <p>
          You can find menu.json on the following path: <strong>{` theme>src>Layout>Sidebar>Menu.jsx`}</strong>
          <strong>{` theme>src>Layout>Sidebar>Menu.jsx`}</strong>
        </p>

        <h4 className='sub-title'>Making changes in sidebar.</h4>
        <h5 className='inner-sub-title'>If you require to make any changes in the sidebar, you could follow the given instructions.</h5>
        <h5 className='inner-sub-title'>To add links in sidebar:</h5>
        <p>If you need to add or remove links in the sidebar, all you need to do is make changes in the menu.json file.</p>
        <h5 className='inner-sub-title' id='example'>
          For Example:
        </h5>
        <p>Lets say we want to change the previous sidebar to the new sidebar.</p>
        <div className='d-flex col-12'>
          <div>
            <p>
              <span>
                {' '}
                <strong>Previous Sidebar</strong>
              </span>
            </p>
            <Img className='img-bordered mb-3' src='/assets/images/document/vue/codeSnaps/sidebarOld.png' alt='' />
          </div>
          <div>
            <p>
              <span>
                
                
                <strong> New Sidebar</strong>
              </span>
            </p>
            <Img className='img-bordered mb-3' src='/assets/images/document/vue/codeSnaps/sidebarNew.png' alt='' />
          </div>
        </div>
        <p>To achieve this we can add new object in menu.json, where we want to add the new link. Here we want to add new link in between Dashboard and widget links so we will make the following changes.</p>
        <div className='py-2 ps-3'>
          <div className='code-box-copy'>{/* <codeBox :code="prismCodes.sidebarJSON" /> */}</div>
        </div>
        <p>As you can see above, you will need add data in the predefined format. Title key will contain the text you need to display for the link. In the path key, you will need to add the path that you define in the router.</p>
        <p>
          You can add icons before the link in ui by giving SvgIcon  name in icon key. 
          Here is the path for the SvgIcon  you might want to you.
          <code>{`theme > public > assets > svg`}</code>
          
          . Copy the name of the icon you want to show and paste it in before icon key.
        </p>
        <p>If the link contains sub links add type : 'sub', and if there are no sub links , just add type: 'link'</p>
        <p>
          {' '}
          <strong>For Example:</strong> If you want to add a link without any sublinks then add the following code.
        </p>
        <div className='py-2 ps-3'>
          <div className='code-box-copy'><CodeShowCaseBox code={`{ path: '/app/email-app', icon: 'email', title: 'Email', type: 'link' ,id:7}`
          } /></div>
        </div>
        <p></p>
        <p className='warning-block'>
          {' '}
          
          <strong>Note:</strong>
          Make sure that the path you enter in the json is same as the one that you have given in the router, or else error will be thrown as same path will not be found.
        </p>
        <hr />
        <h5 className='inner-sub-title'>If you want to remove links from the sidebar:</h5>
        <p>As we added code in the above section to add new links in the sidebar. You simply need to remove the whole object to make it disappear from the sidebar.</p>
        <p>
          {' '}
          <strong>For Example:</strong> We added the following code in the menu,json file. If we want to remove the same then we will remove the object in the array of links in menu.jsx.
          <strong>For Example:</strong> We added the following code in the menu,json file. If we want to remove the same then we will remove the object in the array of links in menu.jsx.
        </p>
        <div className='py-2 ps-3'>
          <div className='code-box-copy'><CodeShowCaseBox code={`  
{
      title: 'Chat',
      id:8,
      icon: 'chat',
      type: 'sub',
      active: false,
      children: [
          { path: '/app/chat-app/chats', type: 'link', title: 'Chats' },
          { path: '/app/chat-app/chat-video-app', type: 'link', title: 'Video-app' },
      ],
},`} /></div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default sidebar;
