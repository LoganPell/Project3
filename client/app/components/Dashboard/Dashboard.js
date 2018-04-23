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
			cards,
			userData: [],
			token: null,
			currentPage:'/Dashboard'
		}
    this.getUserData = this.getUserData.bind(this);
	};

	getUserData(token){
    const obj =  getFromStorage('the_main_app')

    fetch('/api/data/all?token=' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({userData: json.data})
          console.log(this.state.userData)
        } else {
          console.log("broke-y no worky")
        }
    })
	};

	pageChange(event) {
    let page = event.target.getAttribute("href");

    if (page === "/Dashboard" || page === "/Detailed"){
      this.setState({currentPage: page})
    }
  };

	componentDidMount(){
		const obj =  getFromStorage('the_main_app');
    const token = obj.token;
    this.setState({"token": token});
    console.log(token);
		this.getUserData(token);
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
							moreClick={(event)=> this.setState(event)}
						/>
					))}
				</div>
			</div>
		);
	}
} 


export default Dashboard;
