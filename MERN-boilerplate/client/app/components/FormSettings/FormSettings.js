import React from "react";


class FormSettings extends React.Component {
	constructor(props) {
  	super(props);
	}

	componentDidMount(){
		this.initializeInputs();

	}

  initializeInputs() {
    var options = {};
    //type select
    var settingsAdd = document.querySelector('.formSettingType');
    var settingsAddInstance = M.FormSelect.init(settingsAdd, options);
    
  }
  
	render(){
		return (
			<div>
					<div className="center-align settingsMarg">Add a New Dough Source or Bill Type</div>
		    	<div className="input-field">
				    <select className="formSettingType">
				      <option value="" disabled>Select an Option</option>
				      <option value="Dough">Dough Source</option>
				      <option value="Bill">Bill Type</option>
				    </select>
				    <label>Dough Source or Bill Type</label>
				  </div>

				  <div className="input-field">
			      	<input type="text" className="value formSettingDesc"/>
			        <label className="formLabel">Description</label>
			    </div>
			</div>
		)
	}
}

export default FormSettings;