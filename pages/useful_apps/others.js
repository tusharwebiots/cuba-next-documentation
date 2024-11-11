import React from "react";
import DemoButton from "../../component/DemoButton";
import Img from "../../component/Img";

const others = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="main-title">Others</h1>
        <p>There are many others application in Cuba which is help you in improve your knowledge and solve your issues.</p>
        <div>
          <h4 className="sub-title title-with-link" id="knowledge">
            Knowledge Base
            <DemoButton preview="https://cuba-nextjs.vercel.app/app/knowledgebase" />
          </h4>
          <Img className="img-border img-fluid" src="/assets/images/knowledge.png" alt="img1" />
        </div>
        <hr />
        <div>
          <h4 className="sub-title title-with-link" id="job">
            Job Search
            <DemoButton preview="https://cuba-nextjs.vercel.app/app/jobsearch/jobdetail" />
          </h4>
          <Img className="img-border img-fluid" src="/assets/images/jobSearch.png" alt="img1" />
        </div>
        <hr />
        <div>
          <h4 className="sub-title title-with-link" id="learning">
            Learning
            <DemoButton preview="https://cuba-nextjs.vercel.app/app/learning/learninglist" />
          </h4>
          <Img className="img-border img-fluid" src="/assets/images/learning.gif" alt="img1" />
        </div>
        <hr />
        <div>
          <h4 className="sub-title title-with-link" id="social">
            Social App
            <DemoButton preview="https://cuba-nextjs.vercel.app/app/social-app" />
          </h4>
          <Img className="img-border img-fluid" src="/assets/images/socialApp.png" alt="img1" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default others;
