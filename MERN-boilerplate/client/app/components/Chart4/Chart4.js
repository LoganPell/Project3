import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart4 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      labels: ['Gas', 'Rent', 'Food', 'Phone'],
      datasets: [
        {
          label: 'Bills/Expenses',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    return (
      <div>
        <h3>Bills/Expenses</h3>
        <HorizontalBar data={data} />
      </div>
    );
  }
}  

export default Chart4