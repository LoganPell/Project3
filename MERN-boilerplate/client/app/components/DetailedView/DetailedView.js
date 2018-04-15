import React, { Component } from 'react';
// import SideMenu from "../SideMenu/SideMenu";
import SideBar from "../SideBar/SideBar";
import 'whatwg-fetch';
import {getFromStorage,setInStorage} from '../../utils/storage'

class DetailedView extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      active: 0,
      buttonText: "Add Dough",
      token: null,
      isLoading: null
    }

    this.toggle = this.toggle.bind(this);
    this.activeItem = this.activeItem.bind(this);
    this.postForm = this.postForm.bind(this);
  }


	toggle(position) {
    if (position === 0){
      this.setState({active : position, buttonText:"Add Dough"})
    } else if (position === 1) {
      this.setState({active : position, buttonText: "Add Bill"})
    } else if (position === 2) {
      this.setState({active : position, buttonText: "Add Goal"})
    }
  }
  
  //sets css class on selected item 
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
            // console.log(this.state.token)
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

  postForm() {
    console.log(this.state.token)
    console.log($(".formType").val())
    console.log($(".formAmount").val())
    console.log($(".formDatepicker").val())
    console.log($(".formRecurrance").val())
  }
  //   //post request to backend
  //   fetch('/api/account/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       firstName: signUpFirstName,
  //       lastName: signUpLastName,
  //       email: signUpEmail,
  //       password: signUpPassword
  //     }),
  //   }).then(res => res.json())
  //     .then(json => {
  //       if (json.success) {
  //         this.setState({
  //             signUpError: json.message,
  //             isLoading: false,
  //             signUpEmail: '',
  //             signUpPassword: '',
  //             signUpFirstName: '',
  //             signUpLastName: ''
  //         });
  //       } else {
  //         this.setState({
  //             signUpError: json.message,
  //             isLoading: false,
  //         });
  //       }
  //     });

  // }

	render(){
		return (
			<div>
				<div className="row">
					<div id="sidebar">
						<div>
							<ul id="sidebarSelect" className="center-align">
								<li className={this.activeItem(0)} onClick={() => {this.toggle(0)}}>Add Dough</li>
       					<li className={this.activeItem(1)} onClick={() => {this.toggle(1)}}>Add Bill</li>
       					<li className={this.activeItem(2)} onClick={() => {this.toggle(2)}}>Add Goal</li>
							</ul>
						</div>
						<div id="sideForm">
							<SideBar activeIndex={this.state.active}/>
              <button onClick={this.postForm} className="btn waves-effect waves-light sideSubmit">{this.state.buttonText}</button>
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