import React from 'react';

const DoughTips = (props) => (
  <div id="doughTips">
  	<div id="doughTipContainer">
	  	<div id="tipText" className="center-align">
	  		{props.tip}
	  	</div>
  	<button onClick={props.newTip} className="btn waves-effect waves-light sideSubmit">New Dough Tip</button>
  	</div>
  </div>
);

export default DoughTips;