import React, { Component } from 'react';
import moment from 'moment';
import currency from 'currency-formatter';
// import SideMenu from "../SideMenu/SideMenu";
import SideBar from "../SideBar/SideBar";
import Chart1 from "../Chart1/Chart1";
import Chart2 from "../Chart2/Chart2";
import Chart3 from "../Chart3/Chart3";
import ListAll from "../ListAll/ListAll";
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
      tipIndex: 0,
      doughVals: null,
      billVals: null, 
      doughTotal: 0,
      billTotal: 0,
      goalTotal: 0
    }

    //binds
    this.toggle = this.toggle.bind(this);
    this.activeItem = this.activeItem.bind(this);
    this.postForm = this.postForm.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.getTypeData = this.getTypeData.bind(this);
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
    this.getTypeData(token);

    this.setState({"token": token, currentTip: this.state.doughTips[0]})
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

          if (dataTypeValue === 0 || dataTypeValue === 1){
            $(".formAmount").val("");
            $(".formDatepicker").val("");
            $(".formLabel").removeClass("active")
          } else if (dataTypeValue === 2) {
            $(".formDesc").val("");
            $(".formAmount").val("");
            $(".formDatepicker").val("");
            $(".formLabel").removeClass("active")
          }
          
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
      const userValue = this.state.token;
      const dataSettingsType = $(".formSettingType").val();
      const dataSettingsDesc = $(".formSettingDesc").val();

      fetch('/api/settings/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: userValue,
        dataType: dataSettingsType,
        dataDesc: dataSettingsDesc,
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          this.getTypeData(userValue);
          //clear 
          $(".formSettingDesc").val("");
          $(".formLabel").removeClass("active")
          //display message
          $("#formMessage11").addClass("formGood");
          $("#formMessage11").removeClass("hide");
          $("#formMessage11").text("Successfully Added!");
          //hide message
          setTimeout(function(){$("#formMessage11").addClass("hide"); $("#formMessage11").removeClass("formGood");}, 1500);
        } else {
        //display message
          $("#formMessage11").addClass("formBad")
          $("#formMessage11").removeClass("hide");
          $("#formMessage11").text("Please Fill Out All Fields");
          //hide message
          setTimeout(function(){$("#formMessage11").addClass("hide"); $("#formMessage11").removeClass("formBad");}, 1500);
        }
      });
    };
  }


  //gets user data and adds to state - can see in console right now
  getUserData(token) {
    fetch('/api/data/all?token=' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          let userData = json.data;
          let doughTotal = 0;
          let billTotal = 0;
          let goalTotal = 0;
          let doughSource = [];
          let billSource = [];

          userData.forEach((dataRecord)=> {
            if (dataRecord.dataType === "Dough"){
              //sum total dough
              doughTotal += dataRecord.dataAmount
            } else if (dataRecord.dataType === "Bill") {
              //sum total bills
              billTotal += dataRecord.dataAmount
            } else {
              //sum total goals
              goalTotal += dataRecord.dataAmount
            }
          })

          this.setState({userData: userData, doughTotal: doughTotal, billTotal: billTotal, goalTotal: goalTotal})
          console.log(this.state.userData);
        } else {
          console.log("error")
        }
    })
  } 

  getTypeData(token) {
    fetch('/api/settings/all?token=' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({doughVals: json.doughVals, billVals: json.billVals});
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
      
  deleteEntry(entryID){
    console.log(entryID)
    fetch('/api/data/delete?id=' + entryID)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.getUserData(this.state.token)
        } else {
          console.log("error")
        }
    })
  }

	render(){
    //table logic
    let table = (<div>Add some dough!</div>);
    let chart1; 
    if (this.state.userData.length > 0){
      table = (
        <div>
           <table>
            <thead>
              <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              
          {this.state.userData.map((entry) => {
    
              return(<ListAll 
                date={moment(entry.dataDate).format("MM/DD/YYYY")}
                key={entry._id}
                type={entry.dataType}
                desc={entry.dataDesc}
                amount={currency.format(entry.dataAmount, "USD")}
                recurrance={entry.dataReccurance}
                deleteClick={() => {this.deleteEntry(entry._id)}}
                />)
            })
          }
             </tbody>
          </table>
        </div>
      )

      chart1 = (
        <Chart1 
            doughData={this.state.doughTotal}
            billData={this.state.billTotal}
            goalData={this.state.goalTotal}
        />
      )
    }

    //main detailed return
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
  							<SideBar activeIndex={this.state.active} doughVals={this.state.doughVals} billVals={this.state.billVals}/>
                <button onClick={this.postForm} className="btn waves-effect waves-light sideSubmit">{this.state.buttonText}</button>
                <div id="formMessage11" className="helper-text center-align hide"></div>
  						</div>
          </div>
          <div>
            <DoughTips tip={this.state.currentTip} newTip={()=>this.getDoughTip()}/>
              </div>
  				</div>
  
					<div id="main" className="">
            {chart1}
            {table}
            <Chart2 />
            <Chart3 />
					</div>
		  </div>
	)};
}
export default DetailedView;