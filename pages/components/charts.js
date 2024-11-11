import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const Charts = () => {
  const prismData = {
    installApex: `npm i react-apexcharts`,
    unInstallApex: `npm uninstall react-apexcharts`,
    usageApex: `/* Basic ApexData.jsx */
export const apexchartsexample = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  options: {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    colors:["#7366ff", "#f73164"]
  },
};
import Chart from 'react-apexcharts'
import {apexchartsexample} from './ApexData'
const Apexcharts = (props)  => {
    return (
      <CardBody>
        <Chart options={apexchartsexample.options} series={apexchartsexample.series} type="area" height={350}  />
      </CardBody>
    );
  }
}`,
    installGoogle: `npm i react-google-charts`,
    unInstallGoogle: `npm uninstall react-google-charts`,
    usageGoogle: `import React from 'react';
import { GoogleChart } from "react-google-charts";
 
const GoogleCharts = (props) => {
    return (
      <GoogleChart
            width={'100%'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Work', 6.7],
                ['Eat', 13.3],
                ['Commute', 20],
                ['Watch TV', 26.7],
                ['Sleep', 33.3],
            ]}
            options={{
                title: 'My Daily Activities',
                colors: ["#51bb25", "#7366ff", "#f73164", "#148df6", "#ff5f24"]
                
            }}
            rootProps={{ 'data-testid': '1' }}
      />
    );
}`,
    installKnob: `npm i knob`,
    unInstallKnob: `npm uninstall knob`,
    usageKnob: `import React  from 'react';
import Knob,{useEffect} from "knob";

const KnobChart = () => {

  useEffect(() => {
    var exampleknob = Knob({
        value: 35,
        left: 1,
        angleOffset: 90,
        className: "review",
        thickness: 0.1,
        fgColor: "#7366ff",
        readOnly: true,
        dynamicDraw: true,
        tickColorizeValues: true,
        bgColor: '#f73164',
        lineCap: 'round',
        displayPrevious:false
    })
    document.getElementById('profit').appendChild(exampleknob);
  },[])

  return(
        <div className="knob-block text-center">
          <div className="knob" id="profit">
          </div>
        </div>
  )
}`,
    installChart: `npm i react-chartjs-2`,
    unInstallChart: `npm uninstall react-chartjs-2`,
    usageChart: `/* chartData.jsx */
export const Data = {
  labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
  datasets: [
        {
            label: 'y',
            lagend: 'y',
            data: [35, 59, 80, 81, 56, 55, 40],
            borderColor: "#7366ff",
            backgroundColor: "rgba(145, 46, 252, 0.4)",
            highlightFill: "rgba(145, 46, 252, 0.4)",
            highlightStroke: "#7366ff",
            borderWidth: 2
        },
        {
            label: 'z',
            lagend: 'z',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: "#f73164",
            backgroundColor: "rgba(247, 49, 100, 0.4)",
            highlightFill: "rgba(247, 49, 100, 0.4)",
            highlightStroke: "#f73164",
            borderWidth: 2
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}
export const Options = {
  maintainAspectRatio: true,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}
 
import { Bar } from 'react-chartjs-2';
import { Data,Option} from './chartData';

const ChartjsExample = () => {
  return(
    <Cardbody>
      <Bar 
          data={Data}
          width={778}
          height={400}
          options={Options} 
      />
    </Cardbody>
  )
}`,

    installChartist: `npm i react-chartist`,
    unInstallChartist: `npm uninstall react-chartist`,
    usageChartist: `import ChartistGraph from 'react-chartist';

const Chartist = (props) => {
    return (
      <Cardbody>
        <ChartistGraph 
              key="1" 
              className="ct-6 flot-chart-container" 
              data={{
                  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                  series: [[12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                  [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                  [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                  [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]]
              }} type={'Line'} listener={{
                  "draw": function (data) {
                      if (data.type === 'line' || data.type === 'area') {
                          data.element.animate({
                              d: {
                                  begin: 2000 * data.index,
                                  dur: 2000,
                                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                  to: data.path.clone().stringify(),
                              }
                          });
                      }
                  }
              }} 
              options={chart1}
        />
      </Cardbody>
    )
  }
}`,
  };
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='main-title'>Charts</h1>

        <div>
          <h4 className='sub-title title-with-link' id='apexCharts'>
            Apex Charts <DemoButton preview='https://cuba-nextjs.vercel.app/charts/apex' official='https://www.npmjs.com/package/react-apexcharts' />
          </h4>
          <Img src='/assets/images/apexCharts.gif' className='img-bordered w-100 ' alt='' />
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installApex} />
          <CodeShowCaseBox code={prismData.usageApex} />
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallApex} />
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='googleCharts'>
            Google Charts <DemoButton preview='https://cuba-nextjs.vercel.app/charts/google' official='https://www.npmjs.com/package/react-google-charts' />
          </h4>
          <Img src='/assets/images/googleCharts.gif' className='img-bordered w-100 ' alt='' />
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installGoogle} />
          <CodeShowCaseBox code={prismData.usageGoogle} />
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallGoogle} />
        </div>

        

        <div>
          <h4 className='sub-title title-with-link' id='chartJsCharts'>
            Chartjs Charts <DemoButton preview='https://cuba-nextjs.vercel.app/charts/chartjs' official='https://www.npmjs.com/package/react-chartjs-2' />
          </h4>
          <Img src='/assets/images/chart.gif' className='img-bordered w-100 ' alt='' />
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installChart} />
          <CodeShowCaseBox code={prismData.usageChart} />
          <h5 className='inner-sub-title mt-4'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallChart} />
        </div>
        <hr />

        
      </div>
    </div>
  );
};

export default Charts;
