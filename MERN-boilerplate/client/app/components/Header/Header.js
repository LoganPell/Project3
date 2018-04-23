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
				<header>
			    		<nav>
			    			<div className="nav-wrapper">
			    			<Link to="#">Dough Flow</Link>
			    			<ul className="right">
				      		<li><Link to="/Dashboard" onClick={this.props.headerClick}>Dashboard</Link></li>
				      		<li><Link to="/Detailed" onClick={this.props.headerClick}>Detailed View</Link></li>
				      		<li><Link to="#" onClick={this.props.logoutFunc}>Logout</Link></li>
				      	</ul>
				      	</div>
			    		</nav>
				</header>
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