import React, { useState } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import AccordionDemo from '../../component/AccordionDemo';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import PopoverItem from '../../component/PopoverItem';
import Tabs from '../../component/Tabs';
import TooltipItem from '../../component/TooltipItem';

const data = {
  buttonImport: `import {Button} from 'reactstrap
 
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="info">Info</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`,
  badgeImport: `import { Badge } from 'reactstrap';
 
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="info">Info</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="light">Light</Badge>
<Badge color="dark tag-pills-sm-mb">Dark</Badge>  `,
  progressImport: `import {Progress} from 'reactstrap'

<Progress value="0"/>
<Progress color="primary" value="25"/>
<Progress color="secondary" value="50"/>
<Progress color="success" value="75"/>
<Progress color="info" value="100"/>`,

  alertImport: `import {Alert} from 'reactstrap'

<Alert color="primary dark">This is a info alert—check it out!</Alert>
<Alert color="secondary dark">This is a light alert—check it out!</Alert>
<Alert color="success dark">This is a success alert—check it out!</Alert>
<Alert color="info dark">This is a danger alert—check it out!</Alert>
<Alert color="warning dark">This is a secondary alert—check it out!</Alert>
<Alert color="danger dark">This is a warning alert—check it out!</Alert>
<Alert color="light dark">This is a dark alert—check it out!</Alert>
<Alert color="dark dark">This is a dark alert—check it out!</Alert>`,
  propoverImport: `import {popover,popoverHeader,popoverBody} from 'reactstrap'
const example = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const toggle = () => setPopover(!popover);
  return(
    <popover placement="bottom" isOpen={popoverOpen} toggle={toggle} target="Popover1">
      <popoverHeader>Popover Title</popoverHeader>
      <popoverBody>And here's some amazing content. It's very engaging. Right?</popoverBody>
    </popover>
  )
}`,
};

const BasicUiElements = () => {
  const popovers = [
    {
      placement: 'top',
      text: 'Top',
    },
    {
      placement: 'bottom',
      text: 'Bottom',
    },
    {
      placement: 'left',
      text: 'Left',
    },
    {
      placement: 'right',
      text: 'Right',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='row'>
      <div className='col-12'>
        <div>
          <h4 className='sub-title '>Basic UI Elemnets</h4>
          <h4 className='sub-title title-with-link' id='button'>
            Button
            <DemoButton preview='https://cuba-nextjs.vercel.app/buttons/simplebutton' official='https://www.npmjs.com/package/reactstrap' />
          </h4>
          <div className='fluid-container small-elements-div'>
            <button className='btn btn-primary ' type='button' data-original-title='' title=''>
              Primary
            </button>
            <button className='btn btn-secondary ' type='button' data-original-title='' title=''>
              Secondary
            </button>
            <button className='btn btn-success ' type='button' data-original-title='' title=''>
              Success
            </button>
            <button className='btn btn-info ' type='button' data-original-title='' title=''>
              Info
            </button>
            <button className='btn btn-warning ' type='button' data-original-title='' title=''>
              Warning
            </button>
            <button className='btn btn-danger ' type='button' data-original-title='' title=''>
              Danger
            </button>
          </div>
          <CodeShowCaseBox code={data.buttonImport} />
          <p className='mt-3'>To use another types button you have to link the related css file according to types of buttons in a head tag</p>
          <DemoButton link='https://cuba-nextjs.vercel.app/buttons/simplebutton' mt-0 />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='tag&Pills'>
            Tag & Pills
            <DemoButton preview='https://cuba-nextjs.vercel.app/ui-kits/tag-pills' official='https://www.npmjs.com/package/reactstrap' />
          </h4>

          <div className='fluid-container small-elements-div mt-2'>
            <span className='badge badge-primary'>Primary</span>
            <span className='badge badge-secondary'>Secondary</span>
            <span className='badge badge-success'>Success</span>
            <span className='badge badge-info'>Info</span>
            <span className='badge badge-warning text-dark'>Warning</span>
            <span className='badge badge-danger'>Danger</span>
            <span className='badge badge-light text-dark'>Light</span>
            <span className='badge badge-dark tag-pills-sm-mb'>Dark</span>
          </div>
          <CodeShowCaseBox code={data.badgeImport} />
          {/* last change here */}
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link ' id='progressBar'>
            Progress Bar
            <DemoButton preview='https://cuba-nextjs.vercel.app/ui-kits/progress' official='https://www.npmjs.com/package/reactstrap' />
          </h4>
          <div className='progress mb-2'>
            <div className='progress-bar' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div>
          </div>
          <div className='progress mb-2'>
            <div className='progress-bar bg-primary' role='progressbar' style={{ width: '25%' }}></div>
          </div>
          <div className='progress mb-2'>
            <div className='progress-bar bg-secondary' role='progressbar' style={{ width: '50%' }}></div>
          </div>
          <div className='progress mb-2'>
            <div className='progress-bar bg-success' role='progressbar' style={{ width: '75%' }}></div>
          </div>
          <div className='progress my-2'>
            <div className='progress-bar bg-info' role='progressbar' style={{ width: '100%' }}></div>
          </div>
          <CodeShowCaseBox code={data.progressImport} />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='alert'>
            Alert
            <DemoButton preview='https://cuba-nextjs.vercel.app/ui-kits/alert' official='https://www.npmjs.com/package/reactstrap' />
          </h4>
          <div className='alert alert-primary' role='alert'>
            This is a info alert&mdash;check it out!
          </div>
          <div className='alert alert-secondary' role='alert'>
            This is a light alert&mdash;check it out!
          </div>
          <div className='alert alert-success' role='alert'>
            This is a success alert&mdash;check it out!
          </div>
          <div className='alert alert-info' role='alert'>
            This is a danger alert&mdash;check it out!
          </div>
          <div className='alert alert-warning' role='alert'>
            This is a secondary alert&mdash;check it out!
          </div>
          <div className='alert alert-danger' role='alert'>
            This is a warning alert&mdash;check it out!
          </div>
          <div className='alert alert-light' role='alert'>
            This is a dark alert&mdash;check it out!
          </div>
          <div className='alert alert-dark' role='alert'>
            This is a dark alert&mdash;check it out!
          </div>
          <CodeShowCaseBox code={data.alertImport} />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='popover'>
            Popover
            <DemoButton preview='https://cuba-nextjs.vercel.app/ui-kits/popover' official='https://www.npmjs.com/package/reactstrap' />
          </h4>
          <div className='fluid-container small-elements-div'>
            <div>
              {popovers.map((popover, i) => {
                return <PopoverItem key={i} item={popover} id={i} />;
              })}
            </div>
          </div>
          <CodeShowCaseBox code={data.propoverImport} />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='tooltip'>
            Tooltip
            <DemoButton preview='https://cuba-nextjs.vercel.app/ui-kits/tooltip' official='https://www.npmjs.com/package/reactstrap' />
          </h4>
          <div>
            {popovers.map((tooltip, i) => {
              return <TooltipItem key={i} item={tooltip} id={i} />;
            })}
          </div>
          <CodeShowCaseBox code={data.propoverImport} />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='dropdown'>
            Dropdown
            <DemoButton preview='https://cuba-nextjs.vercel.app/ui-kits/dropdown' official='https://www.npmjs.com/package/reactstrap' />
          </h4>
          <ButtonDropdown
            isOpen={isOpen}
            toggle={() => {
              setIsOpen(!isOpen);
            }}
          >
            <DropdownToggle caret color='primary'>
              Text
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <CodeShowCaseBox code={data.propoverImport} />
        </div>
        
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='according'>
            According
            <DemoButton preview='https://cuba-nextjs.vercel.app/ui-kits/accordion' official='https://www.npmjs.com/package/reactstrap' />
          </h4>
          <AccordionDemo />
          <CodeShowCaseBox code={data.propoverImport} />
        </div>
      </div>
    </div>
  );
};

export default BasicUiElements;
