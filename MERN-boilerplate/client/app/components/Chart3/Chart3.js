import React from "react";
import {Doughnut} from 'react-chartjs-2';
import currency from 'currency-formatter';

class Chart3 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    const data = {
		    labels: [
				'Dough',
				'Bills',
				'Goals'
			],
			datasets: [{
				data: [this.props.doughData, this.props.billData, this.props.goalData],
				backgroundColor: [
				'#36A2EB',
				'#FF6384',
				'#FFCE56'
				],
				hoverBackgroundColor: [
				'#36A2EB',
				'#FF6384',
				'#FFCE56'
				]
			}]
    
    };

    

  
    
    return (
     	<div className="row">
     			<div className="col s4">
     				<ul className="center-align">
     					<li className="overviewText">Total Dough</li>
     					<li className="overviewTextS">${currency.format(this.props.doughData, "USD")}</li>
     					<li className="overviewText">Total Bills</li>
     					<li className="overviewTextS">${currency.format(this.props.billData, "USD")}</li>
     					<li className="overviewText">Total Goals</li>
     					<li className="overviewTextS">${currency.format(this.props.goalData, "USD")}</li>
     				</ul>
 					</div>
     		 	<div className="col s8">
		        <Doughnut 
		        	data={data}
		        	options={{
		            maintainAspectRatio: true,
		            legend: {
		            	display: true,
		            	position: "bottom"
		            },
		          }}
		        />
		      </div>
		      
     	</div>
    );
  }
}

export default Chart3;
