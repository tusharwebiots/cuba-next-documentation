import React, { useState } from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Rating from 'react-rating';
import Scrollable from '../../component/Scrollable';
import SweetAlert from 'sweetalert2';
import { getTrackBackground, Range } from 'react-range';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

const AdvanceUiElements = () => {
  const [rating, setRating] = useState(0);
  const STEP = 1;
  const MIN = 0;
  const MAX = 20;
  const [values1, setValues1] = useState([10]);

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: 'https://httpbin.org/post' };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {};

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => {
    console.log(files.map((f) => f.meta));
  };
  const notify = (type) => {
    switch (type) {
      case 'info':
        toast.info('Wow so easy!');
        break;
      case 'success':
        toast.success('Wow so easy!');
        break;
      case 'warning':
        toast.warning('Wow so easy!');
        break;
      case 'error':
        toast.error('Wow so easy!');
        break;
      default:
        toast('Wow so easy!');
        break;
    }
  };

  const prismCode = {
    install: `npm i react-perfect-scrollbar`,
    unInstall: `npm uninstall react-perfect-scrollbar`,
    usage: `
import ScrollBar from "react-perfect-scrollbar";

const scrollbarStyles = { borderRadius: 5 }

const Scrollable = () => {

  return (
    <div className="card-body">
        <ScrollBar className="scroll"
        options={{ suppressScrollX: true }}
        >
            <div> <img src = {require('../../assets/images/banner/3.jpg')} alt="girl" className="img-fluid" /></div>
        </ScrollBar>
    </div>
    )
}`,

    installStep: `npm i react-stepzilla`,
    unInstallStep: `npm uninstall react-stepzilla`,
    usageStep: `
/* StepsComponent.js */
export const  DefaultStep = (props) =>  {
  return (
          <Row className="u-steps row">
            <Col sm="4" className="u-step"><span className="u-step-number">1</span>
              <div className="u-step-desc"><span className="u-step-title">Shopping</span>
                <p>Choose what you want</p>
              </div>
            </Col>
            <Col sm="4" className="u-step current"><span className="u-step-number">2</span>
              <div className="u-step-desc"><span className="u-step-title">Billing</span>
                <p>Pay for the bill</p>
              </div>
            </Col>
            <Col sm="4" className="u-step"><span className="u-step-number">3</span>
              <div className="u-step-desc"><span className="u-step-title">Getting</span>
                <p>Waiting for the goods</p>
              </div>
            </Col>
        </Row>
  );
}

import StepZilla from 'react-stepzilla';
import {DefaultStep} from "./StepsComponent";
const defaultdtep =[{name: 'Step 1',component:<DefaultStep/>}]
const Steps = () => {
  return (
    <CardBody>
      <StepZilla steps={defaultdtep} showSteps={false}  showNavigation={false}/>
    </CardBody>
    )
}`,
    installToaster: `npm i react-toastify`,
    unInstallToaster: `npm uninstall react-toastify`,
    usageToaster: `import { ToastContainer,toast } from 'react-toastify'

<CardBody className="btn-showcase">
  <Button color="success" onClick={() => toast.success("Success Notification !")}>
  Success Notification
  </Button>
</CardBody>
<ToastContainer />`,

    installToaster: `npm i reactour`,
    unInstallToaster: `npm uninstall reactour`,
    usageToaster: `import Tour from 'reactour';

const steps = [
  {
    selector: '.step1',
    content: 'This is Profile image',
  },
]

const Tours = (props) =>  {
  const [opentour,setopentour] = useState(true)
  const closeTour = () => {
        setopentour(false);
      };
  return(
    <Tour steps={steps} isOpen={opentour} onRequestClose={closeTour} />
    <div className="avatar">
      <Media body className="step1" alt="" src={require("../../assets/images/user/7.jpg")} data-intro="This is Profile image" />
    </div>
    )
}`,

    installRating: `npm i react-rating`,
    unInstallRating: `npm uninstall react-rating`,
    usageRating: `import Rating from 'react-rating'
const [rating,setRating] = useState(5);
}
const Ratingss = (props) => {
  return (
          <Rating
            initialRating={rating}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            onChange={(rate) => setRating(rate)} 
          />
  );
}`,
    installPagination: `npm i reactstrap`,
    unInstallPagination: `npm uninstall reactstrap`,
    usagePagination: `import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
<Pagination aria-label="Page navigation" className="pagination-primary">
  <PaginationItem>
    <PaginationLink href="#">
      Previous
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      Next
    </PaginationLink>
  </PaginationItem>
</Pagination>`,
    installSweatAlert: `npm i sweetalert2`,
    unInstallSweatAlert: `npm uninstall sweetalert2`,
    usageSweatAlert: `import SweetAlert from 'sweetalert2'

const Sweetalert = (props) => {
  return (
        <CardBody  className="btn-showcase">
        <Button color="primary" className="sweet-1" onClick={() => SweetAlert.fire({title:"Hello world!"})}>Basic</Button>
        <CardBody>
  )
}`,
    installReactRange: `npm i react-range`,
    unInstallReactRange: `npm uninstall react-range`,
    usageReactRange: `
import React from 'react'
import InputRange from 'react-range'

const RangeSlider = () => {

const STEP = 1;
const MIN = 0;
const MAX = 20;
const [values1, setValues1] = useState([10]);

return (
  <Range
        values={values1}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values1) => setValues1(values1)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%"
            }}
          >
          <output style={{ marginTop: "30px" }}>
              0
              </output>
              <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: values1,
                  colors: ["#7366ff", "#ccc"],
                  min: MIN,
                  max: MAX
                }),
                alignSelf: "center"
              }}
              >
              {children}
              </div>
              <output style={{ marginTop: "30px" }}>
              20
              </output>
              </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA"
            }}
            >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#7366ff" : "#CCC"
              }}
            />
          </div>
        )}
      />
)
}`,
    installCropper: `npm i react-image-crop`,
    unInstallCropper: `npm uninstall react-image-crop`,
    usageCropper: `import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
const Example = () => {
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 16 / 9 });
  return(
  <ReactCrop
        src={src}
        crop={crop}
        onImageLoaded={onImageLoaded}
        onComplete={onCropComplete}
        onChange={onCropChange}
  />
  )
}`,

    installDrag: `npm i react-dragula`,
    unInstallDrag: `npm uninstall react-dragula`,
    usageDrag: `import dragula from 'react-dragula';
import  'node_modules/react-dragula/dist/dragula.css';
const DragAndDrop = (props) => {
  const dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
        let options = {};
        dragula([componentBackingInstance], options);
        }
    };
  return (
    <Container  ref={dragulaDecorator}>
      <div>Swap me around</div>
      <div>Swap her around</div>
      <div>Swap him around</div>
      <div>Swap them around</div>
      <div>Swap us around</div>
      <div>Swap things around</div>
      <div>Swap everything around</div>
    </Container>
  )
}`,

    installDropzone: `npm i react-dropzone-uploader`,
    unInstallDropzone: `npm uninstall react-dropzone-uploader`,
    usageDropzone: `import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
 
const Dropzones = () => {

// specify upload params and url for your files
const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

// called every time a file's \`status\` changes
const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }


// receives array of files that are done uploading when submit button is clicked
const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }

return (
    <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
        multiple={false}
        canCancel={false}
    />
)
}`,

    installImageUpload: `npm i react-files`,
    unInstallImageUpload: `npm uninstall react-files`,
    usageImageUpload: `
import Files from 'react-files'


const UploadImage = () =>  {
const [files, setFiles] = useState([]);

function deleteFile(e) {
  setFiles([]);
  return files
}
const onFilesChange = (files) => {
  setFiles(files)
}
const onFilesError = (error, file) => {
  setFiles(file)
}

return (
    <Files
      className='files-dropzone fileContainer'
      onChange={onFilesChange}
      onError={onFilesError}
      accepts={['image/*']}
      multiple={false}
      maxFileSize={10000000}
      minFileSize={0}
      clickable
    >
        {
          files.length > 0
              ? <div className='files-gallery'>
                  {files.map((file,index) =>
                      <img className='files-gallery-item' alt="img" src={file.preview.url} key={index} />
                  )}
              </div>
              : <div className="d-flex justify-content-center">
                  <button className="chooseFileButton me-2">Upload Image</button>
                </div>
      }
  </Files>
)
}`,
  };
  return (
    <div>
      <div>
        <h1 className='main-title'>Advance UI Elements</h1>
        <div id='scrollable'>
          <h4 className='sub-title title-with-link' id='scrollable'>
            Scrollable
            <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/scrollable' official='https://www.npmjs.com/package/react-perfect-scrollbar' />
          </h4>
          <p>This is an React wrapper library for the React Scrollbar. To use this library you should get familiar with the Perfect Scrollbar documentation as well since this documentation only explains details specific to this wrapper.</p>

          <Scrollable />
          <div className='mb-4'>
            <div className='code-box-copy mt-4'>
              <CodeShowCaseBox code={prismCode.install} />
            </div>

            <div className='code-box-copy mt-4'>
              <CodeShowCaseBox code={prismCode.usage} />
            </div>
            <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
            <CodeShowCaseBox code={prismCode.unInstall} />
          </div>
        </div>
      </div>
      <hr />
      <div id='step'>
        <h4 className='sub-title title-with-link'>
          Step
          <DemoButton preview='https://cuba-nextjs.vercel.app/forms/layout/formwizard' official='https://www.npmjs.com/package/react-stepzilla' />
        </h4>
        <Img src='/assets/images/step.gif' />
        <CodeShowCaseBox code={prismCode.installStep} />
        <CodeShowCaseBox code={prismCode.usageStep} />

        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallStep} />
      </div>
      <hr />
      <div id='toaster'>
        <h4 className='sub-title title-with-link'>
          Toaster
          <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/toasts' official='https://www.npmjs.com/package/react-toastify' />
        </h4>
        <div className='fluid-container small-elements-div'>
          <button className='btn btn-primary ' type='button' data-original-title='' title='' onClick={notify}>
            default
          </button>
          <button className='btn btn-success ' type='button' data-original-title='' title='' onClick={() => notify('success')}>
            Success
          </button>
          <button className='btn btn-info ' type='button' data-original-title='' title='' onClick={() => notify('info')}>
            Info
          </button>
          <button className='btn btn-warning ' type='button' data-original-title='' title='' onClick={() => notify('warning')}>
            Warning
          </button>
          <button className='btn btn-danger ' type='button' data-original-title='' title='' onClick={() => notify('error')}>
            Danger
          </button>
        </div>
        <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='colored' type='info' />
        <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='colored' type='success' />
        <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='colored' type='warning' />
        <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='colored' type='error' />
        <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='colored' type='default' />
        <CodeShowCaseBox code={prismCode.installToaster} />
        <CodeShowCaseBox code={prismCode.usageToaster} />

        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallToaster} />
      </div>
      <hr />
      <div id='tour'>
        <h4 className='sub-title title-with-link'>
          Tour
          <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/tour' official='https://www.npmjs.com/package/reactour' />
        </h4>
        <Img src='/assets/images/tour.gif' />

        <CodeShowCaseBox code={prismCode.installToaster} />
        <CodeShowCaseBox code={prismCode.usageToaster} />

        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallToaster} />
      </div>
      <hr />
      <div id='rating'>
        <h4 className='sub-title title-with-link'>
          Rating
          <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/rating' official='https://www.npmjs.com/package/react-ratings-declarative' />
        </h4>
        <Rating initialRating={rating} emptySymbol='fa fa-star-o fa-2x' fullSymbol='fa fa-star fa-2x' onChange={(rate) => setRating(rate)} />
        <CodeShowCaseBox code={prismCode.installRating} />
        <CodeShowCaseBox code={prismCode.usageRating} />

        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallRating} />
      </div>
      <hr />
      <div id='pagination'>
        <h4 className='sub-title title-with-link'>
          Pagination
          <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/pagination' official='https://reactstrap.github.io/?path=/docs/home-installation--page' />
        </h4>
        <Pagination aria-label='Page navigation example'>
          <PaginationItem>
            <PaginationLink previous />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next />
          </PaginationItem>
        </Pagination>
        <CodeShowCaseBox code={prismCode.installPagination} />
        <CodeShowCaseBox code={prismCode.usagePagination} />
        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallPagination} />
      </div>
      <hr />
      <div id='sweetAlert'>
        <h4 className='sub-title title-with-link'>
          Sweet Alert
          <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/sweet-alert2' official='https://www.npmjs.com/package/sweetalert2' />
        </h4>
        <CardBody className='btn-showcase'>
          <Button color='primary' className='sweet-1' onClick={() => SweetAlert.fire({ title: 'Hello world!' })}>
            Basic
          </Button>
        </CardBody>

        <CodeShowCaseBox code={prismCode.installSweatAlert} />
        <CodeShowCaseBox code={prismCode.usageSweatAlert} />

        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallSweatAlert} />
      </div>
      <hr />
      <div id='rangeSlider'>
        <h4 className='sub-title title-with-link'>
          Range Slider
          <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/rangeslider' official='https://www.npmjs.com/package/react-range' />
        </h4>
        <div className='range-slider'>
          <Range
            values={values1}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values1) => setValues1(values1)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: '36px',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <output style={{ marginTop: '30px' }}>0</output>
                <div
                  ref={props.ref}
                  style={{
                    height: '5px',
                    width: '100%',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values: values1,
                      colors: ['#7366ff', '#ccc'],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: 'center',
                  }}
                >
                  {children}
                </div>
                <output style={{ marginTop: '30px' }}>20</output>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '42px',
                  width: '42px',
                  borderRadius: '4px',
                  backgroundColor: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0px 2px 6px #AAA',
                }}
              >
                <div
                  style={{
                    height: '16px',
                    width: '5px',
                    backgroundColor: isDragged ? '#7366ff' : '#CCC',
                  }}
                />
              </div>
            )}
          />
        </div>
        <CodeShowCaseBox code={prismCode.installReactRange} />
        <CodeShowCaseBox code={prismCode.usageReactRange} />
        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallReactRange} />
      </div>
      <hr />
      <div id='imageCropper'>
        <h4 className='sub-title title-with-link'>
          Image Cropper
          <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/imagecropper' official='https://www.npmjs.com/package/react-image-crop' />
        </h4>
        <Img src='/assets/images/imageCropper.gif' />
        <CodeShowCaseBox code={prismCode.installCropper} />
        <CodeShowCaseBox code={prismCode.usageCropper} />
        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallCropper} />
      </div>      
      <div id='dropzone'>
        <h4 className='sub-title title-with-link'>
          Dropzone
          <DemoButton preview='https://cuba-nextjs.vercel.app/bonus-ui/dropzone' official='https://www.npmjs.com/package/react-dropzone-uploader' />
        </h4>
        <Dropzone getUploadParams={getUploadParams} onChangeStatus={handleChangeStatus} onSubmit={handleSubmit} accept='image/*,audio/*,video/*' multiple={false} canCancel={false} />
        <CodeShowCaseBox code={prismCode.installDropzone} />
        <CodeShowCaseBox code={prismCode.usageDropzone} />
        <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
        <CodeShowCaseBox code={prismCode.unInstallDropzone} />
      </div>
      <hr />
    </div>
  );
};

export default AdvanceUiElements;
