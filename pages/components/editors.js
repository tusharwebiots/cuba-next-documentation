import React, { useState } from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import CKEditors from 'react-ckeditor-component';
import Img from '../../component/Img';

const Editors = () => {
  const [content, setContent] = useState('content');
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const prismData = {
    installSimple: `npm i react-ckeditor-component`,
    unInstallSimple: `npm uninstall react-ckeditor-component`,
    usageSimple: `import CKEditors from "react-ckeditor-component";

const Editor =  () =>  {
const [content,setContent] = useState('content')
const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent)
}
  return (
    <CKEditors
          activeclassName="p10"
          content={content}
          events={{
              "change": onChange
          }}
    />
    )
  }`,
    installMDE: `npm i react-simplemde-editor`,
    unInstallMDE: `npm uninstall react-simplemde-editor`,
    usageMDE: `import SimpleMDE from "react-simplemde-editor";

const MdeEDitor  =  () =>  {
const [text,setText] = useState("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.")

const handleChange = () => {
    setText("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.")
}
  return (
    <SimpleMDE
          id="editor_container"
          onChange={handleChange}
          value={text}
          options={{
              autofocus: true,
              spellChecker: false
          }}
    />
    )
  }`,
    installACE: `npm i react-ace`,
    usageACE: `  import AceEditor from "react-ace";
  import "ace-builds/webpack-resolver";
  import "ace-builds/src-noconflict/theme-monokai";
 
  const AceCodeEditor  =  () =>  {
    return (
      <AceEditor
              mode="javascript"
              theme="monokai"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              height="100%"
              width="100%"
              value={\`  
              /* Sample JavaScript edit source */
              // Define a module
              var app = angular.module('app', ['ui.bootstrap']);
              // Define a conroller.
              app.controller('GrokController', ['$scope', '$filter',
              function($scope, $filter) {
              $scope.today = function() {
              $scope.dt = new Date();
              };
              $scope.today();
              $scope.isOpened = false;
              $scope.open = function($event) {
              $event.preventDefault();
              $event.stopPropagation();
              $scope.isOpened = true;
              };
              }]);
              /* End of sample edit source */ \`}
              editorProps={{ $blockScrolling: true }}
              setOptions={{
              showLineNumbers: true,
              tabSize: 1,
              }}
      />
      )
}`,
  };
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='main-title'>Editors</h1>

        <div>
          <h4 className='sub-title title-with-link' id='ckEditor'>
            Simple Editor (ck Editor) <DemoButton />
          </h4>

          <CKEditors
            activeclassName='p10'
            content={content}
            events={{
              change: onChange,
            }}
          />
          <h5 className='inner-sub-title mt-4'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installSimple} />
          <CodeShowCaseBox code={prismData.usageSimple} />
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallSimple} />
          <p>As you can see, it becomes very easy to create a table and even make it dynamic, you just have to provide and update the data in items object, and bootstrap-vue will create the table fields and rows automatically.</p>
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='mde'>
            MDE Editor <DemoButton />
          </h4>
          <Img src='/assets/images/mde.png' className='img-bordered w-100 ' alt='' />
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installMDE} />
          <CodeShowCaseBox code={prismData.usageMDE} />
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallMDE} />
        </div>
        <hr />
        {/* <div>
          <h4 className='sub-title title-with-link'>
            ACE Editor <DemoButton />
          </h4>

          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installACE} />
          <CodeShowCaseBox code={prismData.usageACE} />
          <p>
            As you can see, it becomes very easy to create a table and even make it dynamic, you just have to provide and update the data in items object, and bootstrap-vue will create the table
            fields and rows automatically.
          </p>
        </div> */}
        <hr />
      </div>
    </div>
  );
};

export default Editors;
