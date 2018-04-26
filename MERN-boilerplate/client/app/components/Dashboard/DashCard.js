import React from "react";
import { Link } from 'react-router-dom';
import 'whatwg-fetch';
import {getFromStorage,setInStorage} from '../../utils/storage';
import Detailed from "../DetailedView/DetailedView";

class DashCard extends React.Component {

	snapshot (id){
		if(id===0){
			return(
				<p>Current Balance: ${this.props.userTotal}</p>
			);
		} else if(id===1){
			return(
				<p>Next bill due on: {this.props.userBill}</p>
			);
		} else if(id===2){
			return(
				<p>Set a Goal {this.props.userBill}</p>
			);
		}else {
			return(
				<p>New Features</p>
			);
		}
	}

	render(){
		return(
			<div id="card{props.id}" className="col s10 m4 l4 offset-s1 dashCards">
				<div className="card">
					<div className="card-image">
						<img className="imgs" src={this.props.image}/>
						<object className="icons" data={this.props.icon} type="image/svg+xml"></object>
					</div>
					<div className="card-content">
						<span className="card-title">{this.props.name}</span>
						{this.snapshot(this.props.id)}
					</div>
				</div>
			</div>
		);
	}
	
}

	

export default DashCard;