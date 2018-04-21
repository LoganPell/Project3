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

    console.log(this.state.activeText);
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
  }


  

  //adds new entry to database from the data in the sidebar
  postForm() {

  if (this.state.activeText !== "Settings") {
    const userValue = this.state.token;
    const dataTypeValue = this.state.active;
    const dataDescValue = $(".formDesc").val();
    let dataRecurranceValue = $(".formRecurrance").val();
    const dataAmountValue = $(".formAmount").val();
    const dataDateValue = $(".formDatepicker").val();

    if (dataRecurranceValue === undefined) {
      dataRecurranceValue = "One Time"
    }

    // console.log("user:", userValue)
    // console.log("type:", dataTypeValue)
    // console.log("desc:", dataDescValue)
    // console.log("recur:", dataRecurranceValue)
    // console.log("amount:", dataAmountValue)
    // console.log("date:", dataDateValue)
    
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
         
          //refresh data
          this.getUserData(userValue);
          //clear inputs
          $(".formDesc").val("");
          $(".formAmount").val("");
          $(".formDatepicker").val("");
          $(".formLabel").removeClass("active")
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

    } else {
      
    }
  }

  //gets user data and adds to state - can see in console right now
  getUserData(token) {
    // const obj =  getFromStorage('the_main_app')
    console.log(token);
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
                  <li className={this.activeItem(3)} onClick={() => {this.toggle(3)}}>Add Types</li>
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