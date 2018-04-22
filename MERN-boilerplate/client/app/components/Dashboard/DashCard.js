import React from "react";
import { Link } from 'react-router-dom';
import 'whatwg-fetch';
import {getFromStorage,setInStorage} from '../../utils/storage';
import Detailed from "../DetailedView/DetailedView";


const DashCard = (props) => (
	<div id="card{props.id}" className="col s10 m4 l4 offset-s1">
		<div className="card">
			<div className="card-image">
				<img className="imgs" src={props.image}/>
				<object className="icons" data={props.icon} type="image/svg+xml"></object>
			</div>
			<div className="card-content">
				<span className="card-title">{props.name}</span>
				<p>Other Info here!!</p>
			</div>
			<div className="card-action">
					<a className="waves-effect waves-teal btn-flat green accent-2 white-text" id="incomeBtn">
						<i className="material-icons left">more_horiz</i>
						More
					</a>
					<Link to="/Detailed" onClick={props.moreClick}>Detailed View</Link>
			</div>
		</div>
	</div>
);

export default DashCard;