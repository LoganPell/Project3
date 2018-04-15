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
  	$(".formType").val("");
  	$(".formAmount").val("");
 		$(".formDatepicker").val("");
 		$(".formRecurrance").val(1);
 		$(".formLabel").removeClass("active")
 		this.initializeInputs();
  }

  componentWillUnmount(){
  	
  }

  // getValues(){
  // 	console.log($(".formType").val())
  // 	console.log($(".formAmount").val())
 	// 	console.log($(".formDatepicker").val())
 	// 	console.log($(".formRecurrance").val())
  // }

	render(){
		if (this.props.activeIndex === 0) {
			return (
			<div>
					<div className="input-field">
			      	<input type="text" className="value formType"/>
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
				      <option value="1">One Time</option>
				      <option value="2">Weekly</option>
				      <option value="3">Monthly</option>
				    </select>
				    <label>Reccurance</label>

				  </div>
		      
			</div>
		)
		} else if (this.props.activeIndex === 1){
			return (
			<div>
					<div className="input-field">
			      	<input type="text" className="value formType"/>
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
				      <option value="1">One Time</option>
				      <option value="2">Weekly</option>
				      <option value="3">Monthly</option>
				    </select>
				    <label>Reccurance</label>

				  </div>
			</div>
		)
		} else if ((this.props.activeIndex === 2)) {
			return (
			<div>
					<div className="input-field">
			      	<input type="text" className="value formType"/>
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