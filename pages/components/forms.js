import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const Forms = () => {
  const prismData = {
    validationCode: `import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupText } from 'reactstrap'
import { CustomStyles, FirstName, LastName,  SubmitForm } from '../../../constant'

const FormValidation = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
  <Breadcrumb parent='Form' title='Validation' />
  <Container fluid={true}>
    <Row>
      <Col sm='12'>
        <Card>
          <CardHeader>
            <h5>{CustomStyles}</h5>
          </CardHeader>
          <CardBody>
            <Form className='needs-validation' noValidate='' onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md='4 mb-3'>
                  <Label htmlFor='validationCustom01'>{FirstName}</Label>
                  <input className='form-control' name='firstName' type='text' placeholder='First name' {...register('firstName', { required: true })} />
                  <span>{errors.firstName && 'First name is required'}</span>
                  <div className='valid-feedback'>{'Looks good!'}</div>
                </Col>
                <Col md='4 mb-3'>
                  <Label htmlFor='validationCustom02'>{LastName}</Label>
                  <input className='form-control' name='lastName' type='text' placeholder='Last name' {...register('lastName', { required: true })} />
                  <span>{errors.lastName && 'Last name is required'}</span>
                  <div className='valid-feedback'>{'Looks good!'}</div>
                </Col>
              </Row>
              <Button color='primary'>{'Submit form'}</Button>
            </Form>
          </CardBody>
        </Card>
      <Card>
    </Card>
  </Col>
  </Row>
  </Container>
</Fragment>;
  );
};

export default FormValidation;`,

    installDatePicker: `npm i react-datepicker`,
    unInstallDatePicker: `npm uninstall react-datepicker`,
    usageDatePicker: `import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Example = () => {
  const [startDate,setstartDate] = useState(new Date())

  const handleChange = date => {
        setstartDate(date);
    };

  return (
    <Cardbody>
      <DatePicker 
              className="form-control digits" 
              selected={startDate} 
              onChange={handleChange}  />
    </Cardbody>
  );

}`,
    installTypeHead: `npm i react-bootstrap-typeahead`,
    unInstallTypeHead: `npm uninstall react-bootstrap-typeahead`,
    usageTypeHead: `import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
const Example = () => {
  const [multiple, setMultiple] = useState(false);
  return(
    <Cardbody>
        <Typeahead
          id="basic-typeahead"
          labelKey="name"
          multiple={multiple}
          options={options}
          placeholder="Choose a state..."
        />
    </Cardbody>
  )
}`,
  };
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='main-title title-with-link' id='forms'>
          Forms
        </h1>
        <p>This theme being an admin theme, we believe you will have many pages that requires forms to submit or update the data. For that purpose forms are necessary. We have given avast amount of forms with different combinations of inputs to choose from.</p>
        <p>Here we have given a brief explaination and examples of different type of forms and form functionalities.</p>
        <p className='warning-block'>
          {' '}
          <strong>Note:</strong> we have used <span className='bold'>reactstrap</span> for creating the forms and have used <span className='bold'>react-hook-form</span> for from validation, make sure you install these packages as well with the command <span className='bold'> npm install react-hook-form reactstrap</span>.<strong>Note:</strong> we have used <span className='bold'>reactstrap</span> for creating the forms and have used <span className='bold'>react-hook-form</span> for from validation, make sure you install these packages as well with the command <span className='bold'> npm install react-hook-form reactstrap</span>.
        </p>

        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='formValidation'>
            Form Validation: <DemoButton preview='https://cuba-nextjs.vercel.app/forms/layout/formwizard' official='https://www.npmjs.com/package/react-hook-form' />
          </h4>

          <p>Without proper validations, user might enter data which are not according to out required format. To make sure user understands what a valid data is, we must provide proper validation messages to convey to the user what necessary conditions are to enter the data.</p>
          <p>
            {' '}
            <strong>For Example:</strong>
            <strong>For Example:</strong>
          </p>
          <p>Below is an image of invalid form and its code snippet.</p>

          <Img src='/assets/images/document/vue/codeSnaps/validationFormInvalid.gif' className='img-bordered w-100 mb-4' alt='' />
          <CodeShowCaseBox code={prismData.validationCode} />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='datePicker'>
            Date Picker: <DemoButton preview='https://cuba-nextjs.vercel.app/forms/widget/datepicker' official='https://www.npmjs.com/package/react-datepicker' />
          </h4>

          <p>There are many instances where we will need to use the date field with proper format, for that we have included datepicker using a third party package, which makes the date-time picker more easy to use and also makes it look attractive.</p>
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>

          <Img src='/assets/images/datepicker.png' className='img-bordered w-100 m-4' alt='' />
          <CodeShowCaseBox code={prismData.installDatePicker} />
          <CodeShowCaseBox code={prismData.usageDatePicker} />
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallDatePicker} />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='typeahead'>
            Typeahead <DemoButton preview='https://cuba-nextjs.vercel.app/forms/widget/typeahead' official='https://www.npmjs.com/package/react-bootstrap-typeahead' />
          </h4>

          <p>While using a website with numerous pages, it becomes difficult to navigate arround, for that we have used typeahead to search throught the array of pages and show the matching results. This way it becomes easy to find the page you want to navigate to. You can use it for other purposes as well, you just need to provide search query and the array through which you need to filter and it will do the rest of the work for you.</p>
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>

          <Img src='/assets/images/typehead.gif' className='img-bordered w-100 mb-4' alt='' />
          <CodeShowCaseBox code={prismData.installTypeHead} />
          <CodeShowCaseBox code={prismData.usageTypeHead} />
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallTypeHead} />
        </div>
      </div>
    </div>
  );
};

export default Forms;
