import React from "react";
import {Bar} from 'react-chartjs-2';

class Chart1 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    const data = {
      labels: ['Status', 'Goal'],
      datasets: [
        {
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [(this.props.doughData - this.props.billData), this.props.goalData]
        }
      ],
    };

  
    
    return (
      <div>
        <Bar
          data={data}
          width={120}
          height={50}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  },
                  gridLines: {
                    display:false
                  }   
              }],
              xAxes: [{
                  gridLines: {
                    display:false
                  }   
              }]
            },
            legend: {
            display: false
            },
          }}
        />
      </div>
    );
  }
}

export default Chart1;



