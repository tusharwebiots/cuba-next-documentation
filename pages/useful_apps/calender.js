import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const Calender = () => {
  const prismData = {
    install: `npm i react-big-calendar`,
    uninstall: `npm uninstall react-big-calendar`,
    usage: `import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
 
const localizer = momentLocalizer(moment)
 
const MyCalendar = props => (
  <div>
    <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500}}
    />
  </div>
)`,
  };
  return (
    <div className='row'>
      <h4 className='sub-title title-with-link' id='calendar'>
        Calender
        <DemoButton preview='https://cuba-nextjs.vercel.app/app/calendar' official='https://www.npmjs.com/package/react-big-calendar' />
      </h4>
      <p>
        To keep things professional you can add integrate the email application with this theme, to share the important information with your colleagues. We have provided a design for the email
        application, you can use it and build a fully functional e-mail application.
      </p>
      <div className='d-flex justify-content-center align-items-center'>
        <Img className='img-border img-fluid' src='/assets/images/calender.gif' alt='img1' />
      </div>

      <h5 className='inner-sub-title'>Installing and usage</h5>
      <CodeShowCaseBox code={prismData.install} />
      <CodeShowCaseBox code={prismData.usage} />
      <h5 className='inner-sub-title'>Remove package from our project</h5>
      <CodeShowCaseBox code={prismData.uninstall} />
    </div>
  );
};

export default Calender;
