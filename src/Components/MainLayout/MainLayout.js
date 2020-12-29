import React from 'react';
import Routes from '../../routes';
import Header from './Header/Header';
import Menu from './Menu/Menu';

const MainLayout = () => (
    <div className="App">
      <Menu/>
      <div className="content">
        <Header />
        <Routes />
      </div>
    </div>
);

export default MainLayout;
