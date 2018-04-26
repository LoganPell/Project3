import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart2 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const data = {
      labels: this.props.labelArray,
      datasets: [
        {
          label: 'Dough/Income',
          backgroundColor: 'rgba(99,255,132,0.2)',
          borderColor: 'rgba(99,255,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(99,255,132,0.4)',
          hoverBorderColor: 'rgba(99,255,132,1)',
          data: this.props.dataArray
        },
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
        legend: false}
        }/>
      </div>
    );
  }
}  

export default Chart2