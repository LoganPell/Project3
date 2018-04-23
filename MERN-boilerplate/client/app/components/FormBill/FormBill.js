import React from "react";


class FormBill extends React.Component {
	constructor(props) {
  	super(props);
  	this.state = {
  		listLen: 0
  	}
	}

	componentDidMount(){
		this.dropDownCreate();
	}

componentDidUpdate(){
		let doughList = this.props.billVals;
		if (doughList !== null) {
			let doughLen = doughList.length;
			if (doughLen > this.state.listLen){
				this.dropDownCreate();
			}
		}
	}

	dropDownCreate(){
		let doughList = this.props.billVals;
		let doughLen = 0;
		
		if (doughList !== null) {
			doughLen = doughList.length;
			for (let i=0; i <doughLen; i++){
				$(".formBillType").append("<option value="+doughList[i]+">"+doughList[i]+"</option>");
			}
		}

		this.initializeInputs();
		this.setState({listLen: doughLen})
	}

  initializeInputs() {
    var options = {};
    var billDatePicker = document.querySelector('.billDatepicker');
    var billDatePickInstance = M.Datepicker.init(billDatePicker,options); 

    //recurrance select
    var billRecurrance = document.querySelector('.formBillRecurrance');
    var billRecurranceInstance = M.FormSelect.init(billRecurrance, options);

    //type select
    var billType = document.querySelector('.formBillType');
    var billTypeInstance = M.FormSelect.init(billType, options);
  }
  
	render(){
		return (
			<div>
					
			    <div className="input-field">
				    <select className="formDesc formBillType">
				      <option value="" disabled>Select a Bill Type</option>
				    </select>
				    <label>Bill Type</label>
				</div>

		    	<div className="input-field">
		      	<input type="number" step="0.01" className="value formAmount"/>
		        <label className="formLabel">Bill Amount</label>
		      </div>

		 
		      <div className="input-field">
		        	<input type="text" className="datepicker formDatepicker billDatepicker"/>
		          <label className="formLabel">Bill Date</label>
		      </div>
		 			
		 			<div className="input-field">
				    <select className="formBillRecurrance formRecurrance">
				      <option value="" disabled>Reccurance</option>
				      <option value="One Time">One Time</option>
				      <option value="Weekly">Weekly</option>
				      <option value="Monthly">Monthly</option>
				    </select>
				    <label>Reccurance</label>

				  </div>
			</div>
		)
	}
}

export default FormBill;