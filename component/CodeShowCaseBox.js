import React, { useEffect, useState } from 'react';

const CodeShowCaseBox = ({ code, lang }) => {
  const [copyDone, setCopyDone] = useState(false);
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReRender(false);
    }, 1000);
  }, []);

  const copyCode = () => {
    setCopyDone(true);
    setTimeout(() => {
      setCopyDone(false);
    }, 1500);
    navigator.clipboard.writeText(code);
  };

  return (
    <div className='code-box-copy'>
      <button
        className='code-box-copy__btn btn-clipboard'
        data-clipboard-target='#npmcode'
        title='Copy'
        onClick={() => {
          copyCode();
        }}
      >
        <i className={`fa  ${copyDone ? 'fa-check' : 'fa-files-o'}`} />
      </button>
      <pre className={`language-${lang || 'html'}`} tabIndex={-1}>
        <code className={`language-${lang || 'html'}`} id='npmcode'>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeShowCaseBox;
