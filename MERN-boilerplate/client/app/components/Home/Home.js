import React, { Component } from 'react';
import 'whatwg-fetch';
import Header from '../Header/Header';
// import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard";
import Detailed from "../DetailedView/DetailedView";

import {
  getFromStorage,
  setInStorage
} from '../../utils/storage'

import LandingPage from '../LandingPage/LandingPage';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: '',
      currentPage: "/Dashboard"
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
    this.pageChange = this.pageChange.bind(this);
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

  //sign in email
  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }
  //sign in password
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }
  //sign up email
  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }
  //sign up password
  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }
  //sign up first name
  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }
  //sign up last name
  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }

  onSignUp() {
    //grab state
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword
    } = this.state;

    this.setState({
      isLoading: true
    });
    //post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
              signUpError: json.message,
              isLoading: false,
              signUpEmail: '',
              signUpPassword: '',
              signUpFirstName: '',
              signUpLastName: ''
          });
        } else {
          this.setState({
              signUpError: json.message,
              isLoading: false,
          });
        }
      });
    }

  onSignIn() {
    //grab state
    const {
      signInEmail,
      signInPassword
    } = this.state
    //post request to backend
    this.setState({
      isLoading: true
    });
    //post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
              signInError: json.message,
              isLoading: false,
              signInEmail: '',
              signInPassword: '',
              token: json.token
          });
        } else {
          this.setState({
              signInError: json.message,
              isLoading: false,
          });
        }
      });
  }

  logout() {
    this.setState({
      isLoading: true,
    })
    const obj =  getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      //verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
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

  pageChange(event) {
    let page = event.target.getAttribute("href");

    if (page === "/Dashboard" || page === "/Detailed"){
      this.setState({currentPage: page})
    }
  }



  render() {
    const {
      isLoading,
      token,
      signInError,
      signUpError,
      signInEmail,
      signInPassword,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>)
    }

    if (!token) {
      return (
        <div>
         <div className="row">
          <div className="col s12 m12 l3 ">
            <div className="logo">
              <img className="responsive-img" height="300px" src="assets/img/logo.png" />
            </div>
          </div>

          <div className="col s12 m6 l3 push-l2">
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <div className="email">
              <input 
                type="email" 
                placeholder="Email" 
                value={signInEmail} 
                onChange={this.onTextboxChangeSignInEmail}
              />
            </div>
          </div>
             <div className="col s12 m6 l3 push-l2">
              <div className="password">
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={signInPassword} 
                  onChange={this.onTextboxChangeSignInPassword}
                />
                <a className="red accent-2 waves-effect waves-light btn" onClick={this.onSignIn}>Sign In</a>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="col s12 m12 l4 push-l1">
                <div className="log-in card">
                  <div className="card-content">
                    {
                      (signInError) ? (
                        <p>{signInError}</p>
                      ) : (null)
                    }
                    <span className="card-title">Sign In</span>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      value={signInEmail} 
                      onChange={this.onTextboxChangeSignInEmail}
                    />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      value={signInPassword} 
                      onChange={this.onTextboxChangeSignInPassword}
                    />
                    <a className="red accent-2 waves-effect waves-light btn" onClick={this.onSignIn}>Sign In</a>
                  </div>
                  <div className="card-action">
                    {
                      (signUpError) ? (
                        <p>{signUpError}</p>
                      ) : (null)
                    }
                    <span className="card-title">Sign Up</span>
                    <input 
                    type="text" 
                    placeholder="First Name" 
                    value={signUpFirstName} 
                    onChange={this.onTextboxChangeSignUpFirstName}
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      value={signUpLastName}
                      onChange={this.onTextboxChangeSignUpLastName} 
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      value={signUpEmail} 
                      onChange={this.onTextboxChangeSignUpEmail}
                    />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      value={signUpPassword}
                      onChange={this.onTextboxChangeSignUpPassword}
                    />
                    <a className="red accent-2 waves-effect waves-light btn" onClick={this.onSignUp}>Sign Up</a>
                  </div>    
                </div>
            </div>
            <div className='col s12 m6 l5 push-l2 pull-s4'>
              <div className="nikki">
                <div className="lady-image"> 
                  <div className="hide-on-small-only">
                    <img className="responsive-image" src="assets/img/landing-page-image.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LandingPage />
        </div>
      );
    }

    {if (this.state.currentPage === "/Dashboard"){
      return (
        <div>
          <Header 
            logoutFunc={()=> this.logout()}
            headerClick={(event)=> this.pageChange(event)}
          />
          <Dashboard />
        </div>
      )
    } else if (this.state.currentPage === "/Detailed"){
      return (
        <div>
          <Header 
            logoutFunc={()=> this.logout()} 
            headerClick={(event)=> this.pageChange(event)}
          />
          <Detailed />
        </div>
      )
    }}
    


  }
}

export default Home;
