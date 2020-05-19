import React  from 'react'
import ReactApexChart from 'react-apexcharts';


class MiddleChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'CAN KM',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 12, 37, 21, 44, 22, 30,44, 13, 22, 37, 21, 13, 22, 37, 21, 56, 27, 43]
        }, {
          name: 'GPS KM',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 20,34, 23, 12, 57, 31, 13, 22, 37, 21, 36, 39,12]
        }, {
          name: 'AVG KM',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 43, 21, 41, 56, 27, 13, 22, 37, 21, 2]
        }],
        options: {
          chart: {
            height: 350,
            width: 700,
            type: 'line',
            stacked: false,
          },
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
          },
          plotOptions: {
            bar: {
              columnWidth: '40%'
            }
          },
          
          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: 'light',
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100]
            }
          },
          labels: ['01/01/2019', '02/01/2019', '03/01/2019', '04/01/2019', '05/01/2019', '06/01/2019', '07/01/2019',
            '08/01/2019', '09/01/2019', '10/01/2019', '11/01/2019','12/01/2019','01/01/2020', '02/01/2020', '03/01/2020', '04/01/2020', '05/01/2020', '06/01/2020', '07/01/2020',
            '08/01/2020', '09/01/2020', '10/01/2020', '11/01/2020'
          ],
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'Points',
            },
            min: 0
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
                }
                return y;
          
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div className="bg-light shadow-lg rounded-lg" id="chart" style={{width: "1000px"}}>
      <div className="shadow h5 bg-dark text-light rounded-lg" style={{textAlign: "center"}}>Total mileage Pegas has done in a month. Calculated automatically!</div>
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={250} />
</div>


      );
    }
  }

  export default MiddleChart;