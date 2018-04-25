import React, { Component } from 'react';


import {
  getFromStorage,
  setInStorage
} from '../../utils/storage'

import { Link } from 'react-router-dom';

class Header extends Component{
	constructor(props) {
		super(props);

		this.state = {
			token: '',
		}
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

	render () {
		const {
			token
		} = this.state;

		if (!token) {
			return (
				<header>
		    		<nav>
			      		<Link to="/">Dough Flow</Link>
		    		</nav>
				</header>
			);
		} else if (token) {
			return (
				<div className="navbar-fixed">
					<nav className="teal darken-2 z-depth-0">
						<div className="nav-wrapper">
							<Link to="/" className="brand-logo left" onClick={this.props.headerClick}>Dough Flow</Link>
							<a href="#" data-target="mobile-nav" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
							<ul className="hide-on-med-and-down right">
				      			<li><Link to="/Dashboard" onClick={this.props.headerClick}>Home</Link></li>
				      			<li><Link to="/Detailed" onClick={this.props.headerClick}>Details</Link></li>
				      			<li><a onClick={this.props.logoutFunc}>Logout</a></li>
							</ul>
						</div>
						<div>
							<ul id="mobile-nav" className="sidenav">
				      			<li><Link to="/Dashboard" onClick={this.props.headerClick}>Home</Link></li>
				      			<li><Link to="/Detailed" onClick={this.props.headerClick}>Details</Link></li>
				      			<li><a onClick={this.props.logoutFunc}>Logout</a></li>
							</ul>
						</div>
		    		</nav>
				</div>	
		    );
		}	
	}
};

export default Header;


// import React from 'react';

// import { Link } from 'react-router-dom';

// const Header = () => (
//   <header>
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/helloworld">Hello World</Link>
//       <Link to="/detailed">Detailed View</Link>
//     </nav>

//     <hr />
//   </header>
// );

// export default Header;