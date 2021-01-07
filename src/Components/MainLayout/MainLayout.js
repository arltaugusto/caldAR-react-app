import React from 'react';
import Routes from '../../routes';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import TransitionalModal from '../TransitionModal/TransitionModal';

const MainLayout = () => (
    <div className="App">
      <Menu/>
      <div className="content">
        <Header />
        <Routes />
      </div>
      <TransitionalModal />
    </div>
);

export default MainLayout;
