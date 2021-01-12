import {
  GET_BOILERS_FETCHING,
  GET_BOILERS_FULFILLED,
  GET_BOILERS_REJECTED,
  ADD_BOILER_FETCHING,
  ADD_BOILER_FULFILLED,
  ADD_BOILER_REJECTED,
  DELETE_BOILER_FETCHING,
  DELETE_BOILER_FULFILLED,
  DELETE_BOILER_REJECTED,
  UPDATE_BOILER_FETCHING,
  UPDATE_BOILER_FULFILLED,
  UPDATE_BOILER_REJECTED,
} from '../types/boilers';

const URL = 'https://rr-caldar-t3-1.herokuapp.com/api/boilers';

const getBoilersFetching = () => ({
  type: GET_BOILERS_FETCHING,
});

const getBoilersFulfilled = (list) => ({
  type: GET_BOILERS_FULFILLED,
  payload: list,
});

const getBoilersRejected = () => ({
  type: GET_BOILERS_REJECTED,
});

export const getBoilers = () => (dispatch) => {
  dispatch(getBoilersFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBoilersFulfilled(response));
    })
    .catch(() => {
      dispatch(getBoilersRejected());
    });
};

const addBoilerFetching = () => ({
  type: ADD_BOILER_FETCHING,
});

const addBoilerFulfilled = (content) => ({
  type: ADD_BOILER_FULFILLED,
  payload: content,
});

const addBoilerRejected = () => ({
  type: ADD_BOILER_REJECTED,
});

export const addBoiler = (boiler) => (dispatch) => {
  dispatch(addBoilerFetching());
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(boiler),
  }).then((data) => data.json())
    .then((response) => {
      dispatch(addBoilerFulfilled(response));
    })
    .catch(() => {
      dispatch(addBoilerRejected());
    });
};

const deleteBoilerFetching = () => ({
  type: DELETE_BOILER_FETCHING,
});

const deleteBoilerFulfilled = (payload) => ({
  type: DELETE_BOILER_FULFILLED,
  payload,
});

const deleteBoilerRejected = () => ({
  type: DELETE_BOILER_REJECTED,
});

export const deleteBoiler = (_id) => (dispatch) => {
  dispatch(deleteBoilerFetching());
  return fetch(`${URL}/${_id}`, { method: 'DELETE' })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBoilerFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteBoilerRejected());
    });
};

const updateBoilerFetching = () => ({
  type: UPDATE_BOILER_FETCHING,
});

const updateBoilerFulfilled = (content) => ({
  type: UPDATE_BOILER_FULFILLED,
  payload: content,
});

const updateBoilerRejected = (error) => ({
  type: UPDATE_BOILER_REJECTED,
  payload: error,
});

export const updateBoiler = (content) => (dispatch) => {
  dispatch(updateBoilerFetching());
  return fetch(`${URL}/${content._id}`, {
    method: 'PUT',
    body: JSON.stringify(content),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
    .then((json) => {
      dispatch(updateBoilerFulfilled(json));
    })
    .catch(() => {
      dispatch(updateBoilerRejected());
    });
};
