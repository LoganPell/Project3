import React, { Component } from 'react';
import 'whatwg-fetch';
import Header from '../Header/Header';
// import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard";

import {
  getFromStorage,
  setInStorage
} from '../../utils/storage'

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
        <div>
          <header>
              <nav>
                <Link to="/">Dough Flow</Link>
              </nav>
          </header>
          </div>
          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <p>Sign In</p>
              <input 
                type="email" 
                placeholder="Email" 
                value={signInEmail} 
                onChange={this.onTextboxChangeSignInEmail}
              /><br />
              <input 
                type="password" 
                placeholder="Password" 
                value={signInPassword} 
                onChange={this.onTextboxChangeSignInPassword}
              /><br />
              <button onClick={this.onSignIn}>Sign In</button>
          </div>
          <br />
          <br />
          <div>
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <p>Sign Up</p>
              <input 
              type="text" 
              placeholder="First Name" 
              value={signUpFirstName} 
              onChange={this.onTextboxChangeSignUpFirstName}
            /><br />
              <input 
                type="text" 
                placeholder="Last Name" 
                value={signUpLastName}
                onChange={this.onTextboxChangeSignUpLastName} 
            /><br />
              <input 
                type="email" 
                placeholder="Email" 
                value={signUpEmail} 
                onChange={this.onTextboxChangeSignUpEmail}
            /><br />
              <input 
                type="password" 
                placeholder="Password" 
                value={signUpPassword}
                onChange={this.onTextboxChangeSignUpPassword}
            /><br />
            <button onClick={this.onSignUp}>Sign Up</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <header>
          <nav>
              <Link to="/">Hmm</Link>
              <Link to="/Dashboard">Dashboard</Link>
              <Link to="/Detailed">Detailed View</Link>
              <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <Dashboard/>
      </div>
    );
  }
}

export default Home;
