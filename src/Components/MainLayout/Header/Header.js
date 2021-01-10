import React from 'react';
import { useSelector } from 'react-redux';

import './header.css';

const Header = () => {
  const titleObj = useSelector((state) => state.headerReducer);
  return (
    <header className="header">
      <h1>{titleObj.title}</h1>
    </header>
  );
};

export default Header;
