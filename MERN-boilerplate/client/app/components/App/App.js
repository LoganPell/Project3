import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({children}) => (
	<Home>
		

		<main>
			{children}
		</main>

		<Footer />

	</Home>
	
);

export default App;
