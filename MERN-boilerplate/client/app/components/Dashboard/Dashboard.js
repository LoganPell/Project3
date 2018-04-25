import React, { Component } from 'react';
import DashCard from "./DashCard.js";
import cards from "./cards.json";
import 'whatwg-fetch';
import {getFromStorage,setInStorage} from '../../utils/storage';
import Detailed from "../DetailedView/DetailedView";

class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userTotal: 0,
			nextBill:{},
			cards,
			userID:"",
			token: null,
			currentPage:'/Dashboard'
		}
    this.getUserData = this.getUserData.bind(this);
	};

	getUserData(token){
	    const obj =  getFromStorage('the_main_app');
	    let userID = "";

	    fetch('/api/data/all?token=' + token)
	      .then(res => res.json())
	      .then(json => {
	      	console.log(json)
	        if (json.success) {
	        	console.log("works")
	        	let userData = json.data;
	        	console.log(userData);
	        	let current = 0;
	        	userData.forEach((item)=>{
	        		if (item.dataType==="Dough"){
	        			current += item.dataAmount;
	        			console.log(current);
	        			this.setState({userTotal:current});
	        			console.log(this.state.userTotal);
	        		} else if (item.dataType==="Bill"){

	        		}
	        	})

	        } else {
	          console.log("broke-y no worky")
	        }
	    })
	};

	componentDidMount(){
		const obj =  getFromStorage('the_main_app');
	    const token = obj.token;
	    let userID = "";

	    fetch('/api/account/user?token=' + token)
	      .then(res => res.json())
	      .then(json => {
	        if (json.success) {
	          userID = json.data[0].userId
	          this.getUserData(userID);
	          this.setState({userID: userID, "token": token})
	          console.log(this.state.userID)
	        } else {
	          console.log("error")
	        }
	    })
	};

	render(){
		return(
			<div>
				<div className="row">
					{this.state.cards.map(card =>(
						<DashCard
							id={card.id}
							key={card.id}
							name={card.name}
							image={card.image}
							icon={card.icon}
							userTotal={this.state.userTotal}
						/>
					))}
				</div>
			</div>
		);
	}
} 


export default Dashboard;
