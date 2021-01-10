/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { setAuthentication } from '../../redux/actions/authActions';
import { tokenListener } from '../Firebase/index';
import Routes from '../../routes';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import TransitionalModal from '../TransitionModal/TransitionModal';
import LogIn from '../LogSection/LogIn';

const MainLayout = ({
  authenticated,
  setAuthentication,
}) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthentication();
    }
  }, [setAuthentication]);

  useEffect(() => {
    tokenListener();
  }, []);

  if (authenticated) {
    return (
    <div className="App">
      <Menu/>
      <div className="content">
        <Header />
        <Routes />
      </div>
      <TransitionalModal />
    </div>
    );
  }

  return (
    <Switch>
      <Route path='/login' exact component={LogIn} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setAuthentication,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
