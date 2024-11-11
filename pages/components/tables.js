import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const Tables = () => {
  const prismData = {
    installTable: `npm i reactstrap`,
    unInstallTable: `npm uninstall reactstrap`,
    usageTable: `import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}`,
    installSmartTable: `npm i react-data-table-component`,
    unInstallSmartTable: `npm uninstall react-data-table-component`,
    usageSmartTable: `import ReactTable from 'react-data-table-component';
const Example = () => {
  const Data = [
    {id:"1",name: "Product Menu",status: <i className="fa fa-circle font-success f-12" />,creat_on:"2018-04-18T00:00:00"},
    {id:"2",name: "Category Menu",status: <i className="fa fa-circle font-warning f-12" />,creat_on:"2018-04-18T00:00:00"}
  ]
  const Columns = [
        {name: 'ID',selector: 'id',sortable: true,center:true,},
        {name: 'Name',selector: 'name',sortable: true,center:true,},
        {name: 'Status',selector: 'status',sortable: true,center:true},
        {name: 'Creat_on',selector: 'creat_on',sortable: true,center:true},
    ];
return (
  <Fragment>
    <ReactTable
        columns={Columns}
        data={Data}
        noHeader
        pagination
    />
  </Fragment>
)
}`,
  };
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='main-title' id='tables'>
          Tables
          <DemoButton />
        </h1>
        <p>Apart from the forms you might also require tables to show the added content.</p>
        <p>We have used simple reactstrap tables, benifit of this is that is html code will reduce significantly. You can easily change the theme and layout of the table just by changing classes.</p>
        <p className='success-block mt-3'>
          {' '}
          <strong>Tip:</strong> In our project navigate to theme>src>components>tables to check out the code for tables.
          <strong>Tip:</strong> In our project navigate to theme>src>components>tables to check out the code for tables.
        </p>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='table'>
            Table <DemoButton preview='https://cuba-nextjs.vercel.app/table/reactstraptable/basictable' official='https://6-4-0--reactstrap.netlify.app/components/tables/' />
          </h4>
          <Img src='/assets/images/simpleTables.gif' className='img-bordered w-100 ' alt='' />
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installTable} />
          <CodeShowCaseBox code={prismData.usageTable} />
          <p>As you can see, it becomes very easy to create a table and even make it dynamic, you just have to provide and update the data in items object, and bootstrap-vue will create the table fields and rows automatically.</p>
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallTable} />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='smartTable'>
            Smart table <DemoButton preview='https://cuba-nextjs.vercel.app/table/datatable/api' official='https://www.npmjs.com/package/react-data-table-component' />
          </h4>
          <Img src='/assets/images/smartTable.gif' className='img-bordered w-100 ' alt='' />
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installSmartTable} />
          <CodeShowCaseBox code={prismData.usageSmartTable} />
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallSmartTable} />
        </div>
      </div>
    </div>
  );
};

export default Tables;
