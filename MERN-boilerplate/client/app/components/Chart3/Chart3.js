import React from "react";
import {Doughnut} from 'react-chartjs-2';

class Chart3 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    const data = {
		    labels: [
				'Red',
				'Green',
				'Yellow'
			],
			datasets: [{
				data: [300, 50, 100],
				backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
				],
				hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
				]
			}]
    
    };

  
    
    return (
     	<div>3</div>
    );
  }
}

export default Chart3;
