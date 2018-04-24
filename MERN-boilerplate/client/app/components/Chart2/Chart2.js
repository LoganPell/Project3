import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      labels: ['Youtube', 'Uber', 'Bartending', 'Freelance'],
      datasets: [
        {
          label: 'Dough/Income',
          backgroundColor: 'rgba(99,255,132,0.2)',
          borderColor: 'rgba(99,255,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(99,255,132,0.4)',
          hoverBorderColor: 'rgba(99,255,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    return (
      <div>
        <h2>Dough/Income</h2>
        <HorizontalBar data={data} />
      </div>
    );
  }
}  

export default Chart2