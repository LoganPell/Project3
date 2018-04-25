import React from "react";
import {Bar} from 'react-chartjs-2';
import currency from 'currency-formatter';

class Chart1 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    let status = this.props.doughData - this.props.billData;
    let goals = this.props.goalData;
    console.log("STATUS",status);
    console.log("GOALS",goals)
    let data = {
      labels: ['', ''],
      datasets: [
        {
          backgroundColor: [
            '#36A2EB',
            '#FFCE56'
            ],
          borderWidth: 1,
          hoverBackgroundColor: [
            '#36A2EB',
            '#FFCE56'
            ],
          data: [status, goals]
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
                    display:true
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
        <div>
          <div className="row">
            <div className="col s6 center-align">
              <div className="overviewText">Extra Income</div>
              <div className="overviewTextS">{currency.format(status, "USD")}</div>
            </div>
            <div className="col s6 center-align">
              <div className="overviewText">Goals</div>
              <div className="overviewTextS">{currency.format(goals, "USD")}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart1;



