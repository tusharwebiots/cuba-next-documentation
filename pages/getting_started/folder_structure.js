import Tree, { TreeNode } from "rc-tree";
import React, { useState } from "react";
import { treeData } from "../../data/data";

const FolderStructure = () => {
  const [defaultExpandKeys, setDefaultExpandKeys] = useState([0]);

  return (
    <div classname='row'>
      <Tree multiple draggable treedata='{treeData}' defaultexpandedkeys='{defaultExpandKeys}' autoexpandparent>
        <div id='pages' classname='col-12'>
          <h4 classname='sub-title' id='pages'>
            Pages
          </h4>
          <p>All the pages are made according to the structure used in the sidebar, so that developers can find the related files easily.</p>
          <p>Inside theme folder navigate to src folder and in that goto pages folder. Inside this folder are the main pages that are called in the router to render that page.</p>
        </div>
        <div id='components' classname='col-12'>
          <h4 classname='sub-title' id='components'>
            Components
          </h4>
          <p>
            For all the sections that are commonly used thoughout the theme are converted into small components and are placed in the <strong>components</strong> folder.
            <strong>components</strong> folder.
          </p>
          <p>
            You can find components folder insider <strong>src</strong> folder.
            <strong>src</strong> folder.
          </p>
          <p classname='warning-block'>
            {"{"}" "{"}"}
            <strong>Note:</strong>
            <strong>Note:</strong>
            As these components are used throughout the theme so if you make any changes in these components then , changes will apply to wherever that component has been used.
          </p>
          <p>
            {"{"}" "{"}"}
            <strong>For Example:</strong> Breadcrumbs are common throughout theme, so we have created a component for it and we call it wherever we need it. But now if you make any changes in the breadcrumbs component then all the breadcrumbs content will change as per you changes.
            <strong>For Example:</strong> Breadcrumbs are common throughout theme, so we have created a component for it and we call it wherever we need it. But now if you make any changes in the breadcrumbs component then all the breadcrumbs content will change as per you changes.
          </p>
        </div>
        <div id='assets' classname='col-12'>
          <h4 classname='sub-title' id='assets'>
            Assets
          </h4>
          <p>
            {"{"}" "{"}"}
            <strong>assets</strong> folder. There you can find all the assets like Images, scss files, fonts file etc. If you need to add any additional assets, we recommend you add it inside the assets folder so that the folder structure is maintained. Navigate to <strong>src</strong> folder and the to the <strong>assets</strong> folder. There you can find all the assets like Images, scss files, fonts file etc. If you need to add any additional assets, we recommend you add it inside the assets folder so that the folder structure is maintained.
          </p>
        </div>
        <div id='json' classname='col-12'>
          <h4 classname='sub-title' id='jsonData'>
            JSON Data
          </h4>
          <p>To make code sorter and easily modifiable, we get the required data from a JSON file and loop through it. This process makes our code mode dynamic and more readable.</p>
          <p>For Example: There are many links in our sidebar and if we write HTML code for individual link then, there will be hundreds of lines of code and it would be dificult to make any changes in all the links at once. So the solution is making a JSON file , in which we define an array and then loop through it. To add or remove links you can make modification in menu.json file.</p>
          <p>
            Navigate to{" "}
            <code>
              {"{"}` theme &gt; public &gt; Api_Data`{"}"}
            </code>{" "}
            folder to find all JSON files.
          </p>
        </div>
      </Tree>
    </div>
  );
};

export default FolderStructure;
