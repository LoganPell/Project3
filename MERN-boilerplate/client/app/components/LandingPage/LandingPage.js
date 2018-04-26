import React from 'react';
import { Link } from "react-router-dom";

const LandingPage = () => (
 <div className="body-container">
    <div className="section">
      <div className="middle-part">
       <div className="row">
        <div className="col s12 m4" >
         <div className="icon-block">
            <div className="icon-pics">
            <div className="pict">
             <img className="responsive-img" height="200px" src="assets/img/wallet.jpg" />
             </div>
             </div>
              <h5 className="center">Current</h5>

            <p className="light">In this current economic climate we all need to hustle to stay afloat. Many of us have or might be thinking of doing several jobs now or in the near future. Now you can easily track when and where your bread is stacking.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <div className="icon-pics">
            <img className="responsive-img" height="200px" src="assets/img/bills.jpg" />
            </div>
              <h5 className="center">Bills</h5>

            <p className="light">It’s hard to keep track of where your dough has gone when bills keep showing up at your door! This is especially true when you have multiple forms of income. Let’s maintain your ingredients so you can always stay fresh.</p>
          </div>
        </div>

        <div className="col s12 m4 ">
          <div className="icon-block">
          <div className="icon-pics">
          <img className="responsive-img" height="200px" src="assets/img/goals.jpg" />
          </div>
            <h5 className="center">Grow</h5>

            <p className="light">We know your a dreamer, and we know you need a good financial plan to turn your dreams into reality. Organizing your intentions gives you the best shot of achieving your goals. Let us help, so you can focus on the sweeter things in life.</p>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div className="section">
    <div className="section-3">
    <div className="row">
        <div className="col s12 m6 l3" >
         <div className="icon-block">
            <div className="icon-pics">
            <div className="pict">
             <img className="responsive-img" height="200px" src="assets/img/piechart.png" />
             </div>
             </div>
              <h5 className="center">Chart</h5>

            <p className="light"> An easy to read chart will allow you to see where most of your dough is coming from and where most of your bread is going. This will help you organize your funds to meet your goals.</p>
          </div>
        </div>

        <div className="col s12 m6 l3" >
         <div className="icon-block">
            <div className="icon-pics2">
            <div className="pict-log">
             <img className="responsive-img" height="225px" src="assets/img/log.png" />
             </div>
             </div>
             <div className="filler-1" />
              <h5 className="center">Log</h5>

            <p className="light"> This log will help track your activity to keep you on target. It will illustrate how the quantity of your money varies over a long span of time. It will remind you of when bills are due and how much you have saved for your goals</p>
          </div>
        </div>
        
        <div className="col s12 m6 l3" >
         <div className="icon-block">
            <div className="icon-pics">
            <div className="pict">
             <img className="responsive-img" height="200px" src="assets/img/bargraph.png" />
             </div>
             </div>
             <div className="filler-2" />
              <h5 className="center">Graph</h5>

            <p className="light"> A lot of us are visual learners and graphs make is easy to visually communicate information about your money. With visual starting and stopping points, it’s super easy to see financial areas that you can improve.</p>
          </div>
        </div>

           <div className="col s12 m6 l3" >
         <div className="icon-block">
            <div className="icon-pics">
            <div className="pict center">
             <img className="responsive-img"  src="assets/img/hints.png" height="245" width="245" />
             </div>
             </div>
              <h5 className="center">Tips</h5>

            <p className="light">Do you need a little inspiration or looking for a good idea our Dought Tips are there to help. </p>
          </div>
        </div>




   </div>
  </div>
  </div>
  </div>
    
    
);

export default LandingPage;

