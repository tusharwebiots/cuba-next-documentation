import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import RightSidebar from './RightSidebar';
import Sidebar from './Sidebar';

const Layout = (props) => {
  const [fontSize, setFontSize] = useState('font-increase');
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [topLinks, setTopLinks] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [input, setInput] = useState('');
  return (
    <>
      <a
        href='#javascript'
        className={`sidebar-overlay ${(leftSidebar || topLinks || overlay) && 'show'}`}
        onClick={() => {
          setLeftSidebar(false);
          setTopLinks(false);
          setInput();
        }}
      ></a>
      <Header setFontSize={setFontSize} fontSize={fontSize} setLeftSidebar={setLeftSidebar} leftSidebar={leftSidebar} setTopLinks={setTopLinks} topLinks={topLinks} setOverlay={setOverlay} input={input} setInput={setInput} />
      <div className='container custom-container'>
        <div className='document-main'>
          <Sidebar leftSidebar={leftSidebar} setLeftSidebar={setLeftSidebar} />
          <div className={`content ${fontSize}`}>{props.children}</div>
          <RightSidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
