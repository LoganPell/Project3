import React from "react";
import FormDough from "../FormDough/FormDough";
import FormBill from "../FormBill/FormBill";
import FormGoal from "../FormGoal/FormGoal";
import FormSettings from "../FormSettings/FormSettings";

class SideBar extends React.Component {
	constructor(props) {
  	super(props);
	}

	render(){
		if (this.props.activeIndex === 0) {
			return (
				<FormDough doughVals={this.props.doughVals}/>
			)
		} else if (this.props.activeIndex === 1){
			return (
			<FormBill billVals={this.props.billVals}/>
		)
		} else if (this.props.activeIndex === 2) {
			return (
				<FormGoal />
			)
		} else if (this.props.activeIndex === 3) { 
			return (
				<FormSettings />
			)
		}
	}
}

export default SideBar;