import React from 'react';

const DetailedView = (props) => (

<div>
	<p>Detailed View Component</p>

	<div className="row">
		<div id="sidebar" className="col s12 m5 l4">
			<div id="actionForm" className="z-depth-2">
				<p id="sideTitle" className="center-align">Side Area</p>

			    <div class="input-field col s12">
				    <select>
				      <option value="" disabled selected>Choose your option</option>
				      <option value="1">Option 1</option>
				      <option value="2">Option 2</option>
				      <option value="3">Option 3</option>
				    </select>
				    <label>Materialize Select</label>
				  </div>

	      <div className="input-field col s12 formPut">
	          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
	          <label for="first_name">{props.type}</label>
	        </div>
	       
	      <div className="input-field col s12 formPut">
	          <input placeholder="Placeholder" id="first_name" type="number" className="validate"/>
	          <label for="first_name">First Name</label>
	      </div>

	      <ul className="selectRow">
					<li className="formSelect"><a className="waves-effect waves-light btn-small">Income</a></li>
					<li className="formSelect"><a className="waves-effect waves-light btn-small">Bills</a></li>
					<li className="formSelect"><a className="waves-effect waves-light btn-small">Goals</a></li>
	      </ul>
				     
				
			</div>
		</div>

		<div id="main" className="col s12 m7 l8">
			<p>Main Content Area</p>
		</div>
	</div>
</div>

);

export default DetailedView;