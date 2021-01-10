import {
  LOGIN_FETCHING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  SET_AUTHENTICATION,
  LOGOUT_FETCHING,
  LOGOUT_FULFILLED,
  LOGOUT_REJECTED,
} from '../types/logTypes';
import Firebase from '../../Components/Firebase';

const loginFetchin = () => {
  return {
    type: LOGIN_FETCHING,
  };
};

const loginFulfilled = () => {
  return {
    type: LOGIN_FULFILLED,
  };
};

const logingRejected = () => {
  return {
    type: LOGIN_REJECTED,
  };
};

export const loginWithFirebase = (credentials) => (dispatch) => {
  dispatch(loginFetchin());
  return Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(async (response) => {
      const token = await response.user.getIdToken();
      localStorage.setItem('token', token);
      return dispatch(loginFulfilled());
    })
    .catch(() => {
      return dispatch(logingRejected());
    });
};

export const setAuthentication = () => {
  return {
    type: SET_AUTHENTICATION,
  };
};

const logoutFetching = () => {
  return {
    type: LOGOUT_FETCHING,
  };
};

const logoutFulfilled = () => {
  return {
    type: LOGOUT_FULFILLED,
  };
};

const logoutRejected = () => {
  return {
    type: LOGOUT_REJECTED,
  };
};

export const logout = () => (dispatch) => {
  dispatch(logoutFetching());
  return Firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('token');
      return dispatch(logoutFulfilled());
    })
    .catch(() => {
      return dispatch(logoutRejected());
    });
};
