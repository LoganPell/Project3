import React, { Component } from 'react';


const Dashboard = (props) => (
	<div>
		<div className="row">
			<div className="col s10 m4 l4 offset-s1">
				<div className="card">
					<div className="card-image">
						<img className="imgs" src="/assets/img/wallet.jpg"/>
						<object className="icons" data="/assets/img/income.svg" type="image/svg+xml"></object>
					</div>
					<div className="card-content">
						<span className="card-title">Income</span>
						<p>This will be the props for income</p>
					</div>
					<div className="card-action">
						<a className="waves-effect waves-teal btn-flat green accent-2 white-text" id="incomeBtn" href="#">
							<i className="material-icons left">more_horiz</i>
							More
						</a>
					</div>
				</div>
			</div>
			<div className="col s10 m4 l4 offset-s1">
				<div className="card">
					<div className="card-image">
						<img className="imgs" src="/assets/img/bills.jpg"/>
						<object className="icons" data="/assets/img/bills.svg" type="image/svg+xml"></object>
					</div>
					<div className="card-content">
						<span className="card-title">Bills</span>
						<p>This will be the props for income</p>
					</div>
					<div className="card-action">
						<a className="waves-effect waves-light btn" href="#">
							<i className="material-icons left">more_horiz</i>
							More
						</a>
					</div>
				</div>
			</div>
			<div className="col s10 m4 l4 offset-s1">
				<div className="card">
					<div className="card-image">
						<span className="base">
							<img className="imgs" src="/assets/img/wallet.jpg"/>
						</span>
						<span className="overlay"></span>
					</div>
					<div className="card-content">
						<span className="card-title">Goals</span>
						<p>This will be the props for income</p>
					</div>
					<div className="card-action">
						<a className="waves-effect waves-light btn" href="#">
							<i className="material-icons left">more_horiz</i>
							More
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Dashboard;
