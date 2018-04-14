import React from "react";

class SideMenu extends React.Component {
	constructor(props) {
  	super(props);
	}

	componentDidMount() {
  	this.initializeInputs();
  }

  componentDidUpdate(){
  	this.initializeInputs();
  }

  initializeInputs() {
  	//initialize date picker
  	var options = {};
  	var datePicker = document.querySelector('.datepicker');
  	var datePickInstance = M.Datepicker.init(datePicker, options);

  	var elem = document.querySelector('select');
  	var instance = M.FormSelect.init(elem, options);
  }

	render(){
		{this.initializeInputs()}
		{if(this.props.formIndex ===0){
		return (
			<form>
				<div className="input-field">
			    <select>
			      <option value="" disabled>Source</option>
			      <option value="1">Option 1</option>
			      <option value="2">Option 2</option>
			      <option value="3">Option 3</option>
			    </select>
			    <label>Source</label>
			  </div>

	    	<div className="input-field">
	      	<input id="value" type="number" step="0.01" className="value"/>
	        <label for="value">Amount</label>
	      </div>

	 
	      <div className="input-field">
	        	<input id="datepicker" type="text" className="datepicker"/>
	          <label for="datepicker">Pay Date</label>
	      </div>

	      <button className="btn waves-effect waves-light" type="submit" name="action">Submit Income
			 	
			  </button>
	   
			</form>
		)
	} else if (this.props.formIndex === 1) {
			return (
			<form>
				<div className="input-field">
			    <select>
			      <option value="" disabled>Choose your option</option>
			      <option value="1">Option 1</option>
			      <option value="2">Option 2</option>
			      <option value="3">Option 3</option>
			    </select>
			    <label>Materialize Select</label>
			  </div>

	    	<div className="input-field">
	      	<input id="password" type="text" className="validate"/>
	        <label for="password">Yoooooo</label>
	      </div>

	 
	      <div className="input-field">
	        	<input id="datepicker" type="text" className="datepicker"/>
	          <label for="datepicker">Date Picker</label>
	      </div>

	      <p>
		      <label>
		        <input className="with-gap" name="group1" type="radio"  />
		        <span>Green</span>
		      </label>
		    </p>

	      <button className="btn waves-effect waves-light" type="submit" name="action">Submit Bill
			 	
			  </button>

			  
	   
			</form>
		)
	} else {
		return (
			<form>
				<div className="input-field">
			    <select>
			      <option value="" disabled>Choose your option</option>
			      <option value="1">Option 1</option>
			      <option value="2">Option 2</option>
			      <option value="3">Option 3</option>
			    </select>
			    <label>Materialize Select</label>
			  </div>

	    	<div className="input-field">
	      	<input id="password" type="text" className="validate"/>
	        <label for="password">Yoooooo</label>
	      </div>

	 
	      <div className="input-field">
	        	<input id="datepicker" type="text" className="datepicker"/>
	          <label for="datepicker">Date Picker</label>
	      </div>

	      <button className="btn waves-effect waves-light" type="submit" name="action">Submit Goal
			 	
			  </button>
	   
			</form>
		)
	}};
}
}

export default SideMenu;