import React, { useState } from 'react';
import Routes from '../../routes';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import TransitionalModal from '../TransitionModal/TransitionModal';

const MainLayout = () => {
  const [headerTitle, setHeaderTitle] = useState('Home');

  return (
      <div className="App">
        <Menu/>
        <div className="content">
          <Header title={headerTitle} />
          <Routes setHeaderCallback={setHeaderTitle}/>
        </div>
        <TransitionalModal />
      </div>
  );
};

export default MainLayout;
