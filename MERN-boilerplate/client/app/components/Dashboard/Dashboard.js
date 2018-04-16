import React, { Component } from 'react';
import DashCard from "./DashCard.js";
import cards from "./cards.json";

class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			cards
		}
	}
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
						/>
					))}
				</div>
			</div>
		);
	}
} 


export default Dashboard;
