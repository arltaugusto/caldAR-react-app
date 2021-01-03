/* eslint-disable no-param-reassign, no-underscore-dangle */
import {
  GET_BOILERTYPES_FETCHING,
  GET_BOILERTYPES_FULFILLED,
  GET_BOILERTYPES_REJECTED,
  ADD_BOILERTYPE_FETCHING,
  ADD_BOILERTYPE_FULFILLED,
  ADD_BOILERTYPE_REJECTED,
  DELETE_BOILERTYPE_FETCHING,
  DELETE_BOILERTYPE_FULFILLED,
  DELETE_BOILERTYPE_REJECTED,
  UPDATE_BOILERTYPE_FETCHING,
  UPDATE_BOILERTYPE_FULFILLED,
  UPDATE_BOILERTYPE_REJECTED,
} from '../types/boilerType';

const URL = 'https://rr-caldar-t3.herokuapp.com/api/boilersType';

const getBoilerTypesFetching = () => ({
  type: GET_BOILERTYPES_FETCHING,
});

const getBoilerTypesFulfilled = (list) => ({
  type: GET_BOILERTYPES_FULFILLED,
  payload: list,
});

const getBoilerTypesRejected = () => ({
  type: GET_BOILERTYPES_REJECTED,
});

export const getBoilerTypes = () => (dispatch) => {
  dispatch(getBoilerTypesFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBoilerTypesFulfilled(response));
    })
    .catch(() => {
      dispatch(getBoilerTypesRejected());
    });
};

const addBoilerTypeFetching = () => ({
  type: ADD_BOILERTYPE_FETCHING,
});

const addBoilerTypeFulfilled = (content) => ({
  type: ADD_BOILERTYPE_FULFILLED,
  payload: content,
});

const addBoilerTypeRejected = () => ({
  type: ADD_BOILERTYPE_REJECTED,
});

export const addBoilerType = (building) => (dispatch) => {
  dispatch(addBoilerTypeFetching());
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(building),
  }).then((data) => data.json())
    .then((response) => {
      dispatch(addBoilerTypeFulfilled(response));
    })
    .catch(() => {
      dispatch(addBoilerTypeRejected());
    });
};

const deleteBoilerTypeFetching = () => ({
  type: DELETE_BOILERTYPE_FETCHING,
});

const deleteBoilerTypeFulfilled = (payload) => ({
  type: DELETE_BOILERTYPE_FULFILLED,
  payload,
});

const deleteBoilerTypeRejected = () => ({
  type: DELETE_BOILERTYPE_REJECTED,
});

export const deleteBoilerType = (_id) => (dispatch) => {
  dispatch(deleteBoilerTypeFetching());
  return fetch(`${URL}/${_id}`, { method: 'DELETE' })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBoilerTypeFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteBoilerTypeRejected());
    });
};

const updateBoilerTypeFetching = () => ({
  type: UPDATE_BOILERTYPE_FETCHING,
});

const updateBoilerTypeFulfilled = (content) => ({
  type: UPDATE_BOILERTYPE_FULFILLED,
  payload: content,
});

const updateBoilerTypeRejected = (error) => ({
  type: UPDATE_BOILERTYPE_REJECTED,
  payload: error,
});

export const updateBoilerType = (content) => (dispatch) => {
  dispatch(updateBoilerTypeFetching());
  return fetch(`´${URL}/${content._id}`, {
    method: 'PUT',
    body: JSON.stringify(content),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
    .then((json) => {
      dispatch(updateBoilerTypeFulfilled(json));
    })
    .catch(() => {
      dispatch(updateBoilerTypeRejected());
    });
};
