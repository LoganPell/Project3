import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart4 extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const data = {
      labels: this.props.labelArray,
      datasets: [
        {
          label: 'Bills/Expenses',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.props.dataArray
        }
      ]
    };

    return (
      <div>
        <HorizontalBar 
          data={data}
          options={
          {scales: {
          xAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
         },
         legend: false
        }
        } />
      </div>
    );
  }
}  

export default Chart4