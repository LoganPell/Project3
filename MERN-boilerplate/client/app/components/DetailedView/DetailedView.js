import React, { Component } from 'react';


class DetailedView extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      active: null
    }

    this.toggle = this.toggle.bind(this);
    this.activeItem = this.activeItem.bind(this);
  }

	toggle(position) {
     this.setState({active : position})
  }
  
  activeItem(position) {
    if (this.state.active === position) {
      return "formSelectActive";
    }
    return "formSelect";
  }

  componentDidMount() {
  	var options = {autoClose: true};
  	console.log("Detailed View Mounted")
  	var elem = document.querySelector('.datepicker');
  	var instance = M.Datepicker.init(elem, options);

  	console.log(instance);
  }

  openDatePicker(){

  }


	render(){
		return (
			<div>
				<div className="row">
					<div id="sidebar">
						<div>
							<ul id="sidebarSelect" className="center-align">
								<li className={this.activeItem(0)} onClick={() => {this.toggle(0)}}>Income</li>
       					<li className={this.activeItem(1)} onClick={() => {this.toggle(1)}}>Bills</li>
       					<li className={this.activeItem(2)} onClick={() => {this.toggle(2)}}>Goals</li>
							</ul>
						</div>
						<div id="sideForm">
							<form>
							  <div className="row">
				        	<div className="input-field col s12">
					        	<input id="password" type="text" className="validate"/>
					          <label for="password">Yoooooo</label>
					        </div>
					        <div className="input-field col s12">
					        	<input id="datepicker" type="text" className="datepicker"/>
					          <label for="datepicker">Date Picker</label>
					        </div>
				      	</div>
							</form>
						</div>
					</div>

					<div id="main" className="">
						<h4>$500.00</h4>
						<p>Main Content Area</p>
					</div>
				</div>
			</div>
	)};

}
export default DetailedView;