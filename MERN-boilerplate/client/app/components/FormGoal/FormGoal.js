import React from "react";


class FormGoal extends React.Component {
	constructor(props) {
  	super(props);
	}

	componentDidMount(){
		this.initializeInputs();
	}

  initializeInputs() {
    var options = {};
    var goalDatePicker = document.querySelector('.goalDatepicker');
    var goalDatePickInstance = M.Datepicker.init(goalDatePicker,options); 
  }
  
	render(){
		return (
			<div>
					<div className="input-field">
			      	<input type="text" className="value formDesc"/>
			        <label className="formLabel">Goal</label>
			    </div>

		    	<div className="input-field">
		      	<input type="number" step="0.01" className="value formAmount"/>
		        <label className="formLabel">Goal Amount</label>
		      </div>

		      <div className="input-field">
		        	<input type="text" className="datepicker formDatepicker goalDatepicker"/>
		          <label className="formLabel">Goal Date</label>
		      </div>
			</div>
		)
	}
}

export default FormGoal;