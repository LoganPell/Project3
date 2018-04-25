import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: [],
      labelArray: []
    }
  }

  componentWillUpdate(){
   this.breakoutArrays()
  }

  breakoutArrays(){
    let newLabelArray = [];
    let newDataArray = [];

    let passedData = this.props.arrayData;
    
    passedData.forEach(function(element) {
      newLabelArray.push(element[0])
      newDataArray.push(element[1])
    });

    this.setState({labelArray: newLabelArray, dataArray: newDataArray})
  }

  render() {
    const data = {
      labels: this.state.labelArray,
      datasets: [
        {
          label: 'Bills/Expenses',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.dataArray
        }
      ]
    };

    return (
      <div>
        <HorizontalBar data={data} />
      </div>
    );
  }
}  

export default Chart4