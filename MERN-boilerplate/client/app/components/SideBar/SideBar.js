import React from "react";


class SideBar extends React.Component {
	constructor(props) {
  	super(props);
	}

initializeInputs() {
 		var options = {};
  	var datePicker = document.querySelector('.datepicker');
  	var datePickInstance = M.Datepicker.init(datePicker,options); 

  	//recurrance select
  	var recurrance = document.querySelector('select');
  	var recurranceInstance = M.FormSelect.init(recurrance, options);
  }

 
  componentDidMount() {
  	this.initializeInputs();
  }

  componentDidUpdate(){
  	//clears form
  	$(".formDesc").val("");
  	$(".formAmount").val("");
 		$(".formDatepicker").val("");
 		$(".formRecurrance").val("One Time");
 		$(".formLabel").removeClass("active")
 		this.initializeInputs();
  }

  componentWillUnmount(){
  	
  }

	render(){
		if (this.props.activeIndex === 0) {
			return (
			<div>
					<div className="input-field">
			      	<input type="text" className="value formDesc"/>
			        <label className="formLabel">Source</label>
			    </div>

		    	<div className="input-field">
		      	<input type="number" step="0.01" className="value formAmount"/>
		        <label className="formLabel">Amount</label>
		      </div>

		 
		      <div className="input-field">
		        	<input type="text" className="datepicker formDatepicker"/>
		          <label className="formLabel">Pay Date</label>
		      </div>
		 			
		 			<div className="input-field">
				    <select className="formRecurrance">
				      <option value="" disabled>Reccurance</option>
				      <option value="One Time">One Time</option>
				      <option value="Weekly">Weekly</option>
				      <option value="Monthy">Monthly</option>
				    </select>
				    <label>Reccurance</label>

				  </div>
		      
			</div>
		)
		} else if (this.props.activeIndex === 1){
			return (
			<div>
					<div className="input-field">
			      	<input type="text" className="value formDesc"/>
			        <label className="formLabel">Bill</label>
			    </div>

		    	<div className="input-field">
		      	<input type="number" step="0.01" className="value formAmount"/>
		        <label className="formLabel">Bill Amount</label>
		      </div>

		 
		      <div className="input-field">
		        	<input type="text" className="datepicker formDatepicker"/>
		          <label className="formLabel">Bill Date</label>
		      </div>
		 			
		 			<div className="input-field">
				    <select className="formRecurrance">
				      <option value="" disabled>Reccurance</option>
				      <option value="One Time">One Time</option>
				      <option value="Weekly">Weekly</option>
				      <option value="Monthly">Monthly</option>
				    </select>
				    <label>Reccurance</label>

				  </div>
			</div>
		)
		} else if ((this.props.activeIndex === 2)) {
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
		        	<input type="text" className="datepicker formDatepicker"/>
		          <label className="formLabel">Goal Date</label>
		      </div>
			</div>
		)
		}
	}
}

export default SideBar;