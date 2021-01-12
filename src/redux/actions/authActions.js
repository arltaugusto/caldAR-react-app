/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
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

const loginFetching = () => ({
  type: LOGIN_FETCHING,
});

const loginFulfilled = () => ({
  type: LOGIN_FULFILLED,
});

const logingRejected = () => ({
  type: LOGIN_REJECTED,
});

export const loginWithFirebase = (credentials) => (dispatch) => {
  dispatch(loginFetching());
  return Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(async (response) => {
      const token = await response.user.getIdToken();
      localStorage.setItem('token', token);
      return dispatch(loginFulfilled());
    })
    .catch(() => dispatch(logingRejected()));
};

export const setAuthentication = () => ({
  type: SET_AUTHENTICATION,
});

const logoutFetching = () => ({
  type: LOGOUT_FETCHING,
});

const logoutFulfilled = () => ({
  type: LOGOUT_FULFILLED,
});

const logoutRejected = () => ({
  type: LOGOUT_REJECTED,
});

export const logout = () => (dispatch) => {
  dispatch(logoutFetching());
  return Firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('token');
      return dispatch(logoutFulfilled());
    })
    .catch(() => dispatch(logoutRejected()));
};
