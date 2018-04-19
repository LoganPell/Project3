// import React, { Component } from 'react';


// import {
//   getFromStorage,
//   setInStorage
// } from '../../utils/storage'

// import { Link } from 'react-router-dom';

// class Header extends Component{
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			token: '',
// 		}
// 	}

// 	render () {
// 		const {
// 			token
// 		} = this.state;

// 		if (!token) {
// 			return (
// 				<header>
// 		    		<nav>
// 			      		<Link to="/">Dough Flow</Link>
// 		    		</nav>
// 				</header>
// 			);
// 		} else if (token) {
// 			return (
// 				<header>
// 			    		<nav>
// 				      		<Link to="/">Hmmm</Link>
// 				      		<Link to="/Dashboard">Dashboard</Link>
// 				      		<Link to="/Detailed">Detailed View</Link>
// 				      		<button onClick={this.logout}>Logout</button>
// 			    		</nav>
// 				</header>
// 		    );
// 		}	
// 	}
// };

// export default Header;


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