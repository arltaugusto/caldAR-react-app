/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { setAuthentication } from '../../redux/actions/authActions';
import { tokenListener } from '../Firebase/index';
import Routes from '../../routes';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import TransitionalModal from '../TransitionModal/TransitionModal';
import LogIn from '../LogSection/LogIn';

const MainLayout = ({
  authenticated,
  setAuthenticationFirebase,
}) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticationFirebase();
    }
  }, [setAuthenticationFirebase]);

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
      <Redirect path='/' to='/login' />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setAuthentication,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
