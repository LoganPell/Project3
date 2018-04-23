import React from "react";


class FormDough extends React.Component {
	constructor(props) {
  	super(props);
  	this.state = {
  		listLen: 0,
  	}
	}

	componentDidMount(){
		this.dropDownCreate();
	}

	componentDidUpdate(){
		let doughList = this.props.doughVals;
		if (doughList !== null) {
			let doughLen = doughList.length;
			if (doughLen > this.state.listLen){
				this.dropDownCreate();
			}
		}
	}

	dropDownCreate(){
		let doughList = this.props.doughVals;
		let doughLen = 0;
		
		if (doughList !== null) {
			doughLen = doughList.length;
			for (let i=0; i <doughLen; i++){
				$(".formDoughSource").append("<option value="+doughList[i]+">"+doughList[i]+"</option>");
			}
		}

		this.initializeInputs();
		this.setState({listLen: doughLen})
	}

  initializeInputs() {
    var options = {};
    var doughDatePicker = document.querySelector('.doughDatePicker');
    var doughDatePickInstance = M.Datepicker.init(doughDatePicker, options); 

    //recurrance select
    var doughRecurrance = document.querySelector('.formDoughRecurrance');
    var doughRecurranceInstance = M.FormSelect.init(doughRecurrance, options);

    //source select
    var doughSource = document.querySelector('.formDoughSource');
    var doughSourceInstance = M.FormSelect.init(doughSource, options);
  }

  

	render(){
		return (
			<div>
				<div className="input-field">
				    <select className="formDesc formDoughSource">
				    	<option value='' disabled>Select a Dough Type</option>
				    </select>
				    <label>Dough Type</label>
				</div>

		    	<div className="input-field">
		      	<input type="number" step="0.01" className="value formAmount"/>
		        <label className="formLabel">Amount</label>
		      </div>

		 
		      <div className="input-field">
		        	<input type="text" className="datepicker formDatepicker doughDatePicker"/>
		          <label className="formLabel">Pay Date</label>
		      </div>
		 			
		 			<div className="input-field">
				    <select className="formDoughRecurrance formRecurrance">
				      <option value="One Time">One Time</option>
				      <option value="Monthly" disabled>Monthly - Coming Soon!!</option>
				    </select>
				    <label>Reccurance</label>

				  </div>
		      
			</div>
		)
	}
}

export default FormDough;