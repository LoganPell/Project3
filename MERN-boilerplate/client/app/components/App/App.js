import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({children}) => (
	<div>

			 <main>
				<Home />
			 </main>

		<Footer />

	</div>
	
);

export default App;
