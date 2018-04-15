import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
   
      <Link to="/">Home</Link>
      <Link to="/helloworld">Hello World</Link>
      <Link to="/detailed">Detailed View</Link>
      <Link to="/dashboard">Dashboard</Link>
   

    <hr />
  </header>
);

export default Header;
