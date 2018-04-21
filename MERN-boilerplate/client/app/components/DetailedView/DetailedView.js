import React, { Component } from 'react';
// import SideMenu from "../SideMenu/SideMenu";
import SideBar from "../SideBar/SideBar";
import Chart1 from "../Chart1/Chart1";
import Chart2 from "../Chart2/Chart2";
import Chart3 from "../Chart3/Chart3";
import DoughTips from "../DoughTips/DoughTips";
import tipBank from "./tips.json"
import 'whatwg-fetch';
import {getFromStorage,setInStorage} from '../../utils/storage'



class DetailedView extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      active: 0,
      activeText: "Dough",
      buttonText: "Add Dough",
      token: null,
      isLoading: null,
      postMessage: null,
      userData: [],
      doughTips: tipBank,
      currentTip: "",
      tipIndex: 0
    }

    //binds
    this.toggle = this.toggle.bind(this);
    this.activeItem = this.activeItem.bind(this);
    this.postForm = this.postForm.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.getDoughTip = this.getDoughTip.bind(this);
  }


	toggle(position) {
    if (position === 0){
      this.setState({active: position, activeText : "Dough", buttonText:"Add Dough"})
    } else if (position === 1) {
      this.setState({active: position, activeText : "Bill", buttonText: "Add Bill"})
    } else if (position === 2) {
      this.setState({active: position, activeText : "Goal", buttonText: "Add Goal"})
    } else if (position === 3) {
      this.setState({active: position, activeText : "Settings", buttonText: "Save Settings"})
    }

    this.clearForm();
  }
  
  //sets css class on selected item 
  activeItem(position) {
    if (this.state.active === position) {
      return "formSelectActive";
    }
    return "formSelect";
  }

  componentDidMount() {
    //gets user token
    const obj =  getFromStorage('the_main_app');
    const token = obj.token;
    //gets user data from database
    this.getUserData(token);

    this.setState({"token": token})
    this.setState({currentTip: this.state.doughTips[0]})

    this.initializeInputs();
  }

  componentDidUpdate(){
    this.initializeInputs();
  }
  

  //adds new entry to database from the data in the sidebar
  postForm() {
    const dataTypeValue = this.state.active;
    const dataRecurranceValue = $(".formRecurrance").val();
    const userValue = this.state.token;
    const dataDescValue = $(".formDesc").val();
    const dataAmountValue = $(".formAmount").val();
    const dataDateValue = $(".formDatepicker").val();
    
    //post request to backend
    fetch('/api/data/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: userValue,
        dataType: dataTypeValue,
        dataDesc: dataDescValue,
        dataAmount: dataAmountValue,
        dataDate: dataDateValue,
        dataReccurance: dataRecurranceValue 
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          //successfully posted
      
          //display message
          $("#formMessage11").addClass("formGood");
          $("#formMessage11").removeClass("hide");
          $("#formMessage11").text("Successfully Added!");
          //hide message
          setTimeout(function(){$("#formMessage11").addClass("hide"); $("#formMessage11").removeClass("formGood");}, 1500);
          //clear form
          this.clearForm();
          //refresh data
          this.getUserData(userValue);
        } else {
          //error
          
          //display message
          $("#formMessage11").addClass("formBad")
          $("#formMessage11").removeClass("hide");
          $("#formMessage11").text("Please Fill Out All Fields");
          //hide message
          setTimeout(function(){$("#formMessage11").addClass("hide"); $("#formMessage11").removeClass("formBad");}, 1500);
        }
      });
  }

  //gets user data and adds to state - can see in console right now
  getUserData(token) {
    const obj =  getFromStorage('the_main_app')

    fetch('/api/data/all?token=' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({userData: json.data})
          console.log(this.state.userData)
        } else {
          console.log("error")
        }
    })
  } 

  getDoughTip(){
   let bankLen = this.state.doughTips.length;
   let currentIndex = this.state.tipIndex;

   if (currentIndex === bankLen-1){
    this.setState({tipIndex: 0, currentTip: this.state.doughTips[0]})
   } else {
    currentIndex += 1;
    this.setState({tipIndex: currentIndex, currentTip: this.state.doughTips[currentIndex]})
   }
  }

  initializeInputs() {
    var options = {};
    var datePicker = document.querySelector('.datepicker');
    var datePickInstance = M.Datepicker.init(datePicker,options); 

    //recurrance select
    var recurrance = document.querySelector('select');
    var recurranceInstance = M.FormSelect.init(recurrance, options);
  }

 

  clearForm(){
    //clears form
    $(".formDesc").val("");
    $(".formAmount").val("");
    $(".formDatepicker").val("");
    $(".formRecurrance").val("One Time");
    $(".formLabel").removeClass("active")
    this.initializeInputs();
  }


	render(){
		return (
			<div id="DetailedContainer">
        <div id="sideContainer">
  				<div id="sidebar">
  						<div>
  							<ul id="sidebarSelect" className="center-align">
  								<li className={this.activeItem(0)} onClick={() => {this.toggle(0)}}>Dough</li>
         					<li className={this.activeItem(1)} onClick={() => {this.toggle(1)}}>Bills</li>
         					<li className={this.activeItem(2)} onClick={() => {this.toggle(2)}}>Goals</li>
                  <li className={this.activeItem(3)} onClick={() => {this.toggle(3)}}>Settings</li>
  							</ul>
  						</div>
  						<div id="sideForm">
  							<SideBar activeIndex={this.state.active}/>
                <button onClick={this.postForm} className="btn waves-effect waves-light sideSubmit">{this.state.buttonText}</button>
                <div id="formMessage11" className="helper-text center-align hide"></div>
  						</div>
          </div>
          <div>
            <DoughTips tip={this.state.currentTip} newTip={()=>this.getDoughTip()}/>
              </div>
  				</div>
  
					<div id="main" className="">
						<div>User Data</div>
            <Chart1 />
            <Chart2 />
            <Chart3 />
					</div>
		  </div>
	)};
}
export default DetailedView;