import React from "react";


class SideBar extends React.Component {
	constructor(props) {
  	super(props);
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
		} else if ((this.props.activeIndex === 3)) { 
			return (
				<div>Settings</div>
			)
		}
	}
}

export default SideBar;