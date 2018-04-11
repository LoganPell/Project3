import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/helloworld">Hello World</Link>
      <Link to="/detailed">Detailed View</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
