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
							  <label>
							    Name:
							    <input className="myInput" type="text" name="name"/>
							  </label>
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