import React, { Component } from 'react';
import SideMenu from "../SideMenu/SideMenu";
import 'whatwg-fetch';
import {getFromStorage,setInStorage} from '../../utils/storage'

class DetailedView extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      active: 0,
      token: null,
      isLoading: null
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
    const obj =  getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      //verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
            console.log(this.state.token)
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
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
							<SideMenu formIndex={this.state.active}/>
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