import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
const codeData = {
  step1: `import { projectListData } from "Types/projectTypes";
import { Dispatch, SetStateAction, createContext } from "react";

type GlobalType = {
  projectData: [] | projectListData[];
  setProjectData: Dispatch<SetStateAction<[] | projectListData[]>>;
  getAllProjectData: (data:projectListData[]) => void,

};

const ProjectContext = createContext<GlobalType>({
  projectData: [],
  setProjectData: () => {},
  getAllProjectData: () => {},
});

export default ProjectContext;
`,
  step2: `import { useState } from "react";
import ProjectContext from "./index";
import { projectListData } from "Types/projectTypes";
import { commonContextType } from "Types/CommonElementType";

const ProjectProvider = ({ children }: commonContextType) => {
  const [projectData, setProjectData] = useState<[] | projectListData[]>([]);

  const getAllProjectData = (data: projectListData[]) => {
    setProjectData(data);
  };

  return (
    <ProjectContext.Provider
      value={{
        projectData,
        setProjectData,
        getAllProjectData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };
`,
  step3: `import React from 'react'
import {ProjectContext} from '../ProjectContext'
const App=()=>{
  return(
    <ProjectContext>
       <Routers />  //For Example Children Components
    </ProjectContext>
  )
}`,
  step4: `import React,{ useContext } from 'react';
import ProjectContext from '../../../_helper/ProjectContext/index';

const LeftContact = () => {
  const { projectData } = useContext(ProjectContext);
    return(
      <h1>{projectData.map((data,index)=>(data.tittle))}</h1>
    )
export default LeftContact;`,
};
const Redux = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='main-title' id='useContext'>
          useContext hook
        </h1>
        <p>Here we have used “useContext” hook, which creates common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.</p>
        <p>UseContext hook is inbuild hook so we dont need to install any other packages.</p>
        <p className='warning-block mt-3'>
          <span className='bold'>Note:</span> In our theme we have created the helper folder, and in that we have added all the context files. It is a good approach and also good way of coding.
        </p>
        <ol>
          <li>
            To create global function or variable you need to create a folder in Helper Folder{' '}
            <p>
              <code> theme  &gt;&gt; _helper </code>
            </p>{' '}
          </li>
          <li>Create two files in Helper folder.One of those files will contain below given code.</li>
          <CodeShowCaseBox code={codeData.step1} lang='js' />
          <li>We need to create the Provider in the second file, refer the below code</li>
          <CodeShowCaseBox code={codeData.step2} lang='js' />
          <li>After creating the Provider of any context we need to wrap with child components or the component which we are going to use. Refer the below code.</li>
          <CodeShowCaseBox code={codeData.step3} lang='js' />
          <p className='warning-block mt-3'>
            <span className='bold'>Info:</span> Instead of <code>&lt;Routers/&gt;</code> component, here you have to provide child component which has been exported in <code>{`src > route > router.jsx`}</code> file.
          </p>
          <li>To understand how to use the useContext variables in components, refer the below code.</li>
          <CodeShowCaseBox code={codeData.step4} lang='js' />
        </ol>
      </div>
    </div>
  );
};

export default Redux;
