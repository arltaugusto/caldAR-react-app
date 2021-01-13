import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULFILLED,
  GET_TECHNICIANS_REJECTED,
  ADD_TECHNICIAN_FETCHING,
  ADD_TECHNICIAN_FULFILLED,
  ADD_TECHNICIAN_REJECTED,
  DELETE_TECHNICIAN_FETCHING,
  DELETE_TECHNICIAN_FULFILLED,
  DELETE_TECHNICIAN_REJECTED,
  UPDATE_TECHNICIAN_FETCHING,
  UPDATE_TECHNICIAN_FULFILLED,
  UPDATE_TECHNICIAN_REJECTED,
} from '../types/technicians';

const URL = 'https://rr-caldar-t3-1.herokuapp.com/api/technicians';

const getTechniciansFetching = () => ({
  type: GET_TECHNICIANS_FETCHING,
});

const getTechniciansFulfilled = (list) => ({
  type: GET_TECHNICIANS_FULFILLED,
  payload: list,
});

const getTechniciansRejected = () => ({
  type: GET_TECHNICIANS_REJECTED,
});

export const getTechnicians = () => (dispatch) => {
  dispatch(getTechniciansFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getTechniciansFulfilled(response));
    })
    .catch(() => {
      dispatch(getTechniciansRejected());
    });
};

const addTechnicianFetching = () => ({
  type: ADD_TECHNICIAN_FETCHING,
});

const addTechnicianFulfilled = (content) => ({
  type: ADD_TECHNICIAN_FULFILLED,
  payload: content,
});

const addTechnicianRejected = () => ({
  type: ADD_TECHNICIAN_REJECTED,
});

export const addTechnician = (technician) => (dispatch) => {
  dispatch(addTechnicianFetching());
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(technician),
  }).then((data) => data.json())
    .then((response) => {
      dispatch(addTechnicianFulfilled(response));
    })
    .catch(() => {
      dispatch(addTechnicianRejected());
    });
};

const deleteTechnicianFetching = () => ({
  type: DELETE_TECHNICIAN_FETCHING,
});

const deleteTechnicianFulfilled = (payload) => ({
  type: DELETE_TECHNICIAN_FULFILLED,
  payload,
});

const deleteTechnicianRejected = () => ({
  type: DELETE_TECHNICIAN_REJECTED,
});

export const deleteTechnician = (_id) => (dispatch) => {
  dispatch(deleteTechnicianFetching());
  return fetch(`${URL}/${_id}`, { method: 'DELETE' })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteTechnicianFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteTechnicianRejected());
    });
};

const updateTechnicianFetching = () => ({
  type: UPDATE_TECHNICIAN_FETCHING,
});

const updateTechnicianFulfilled = (content) => ({
  type: UPDATE_TECHNICIAN_FULFILLED,
  payload: content,
});

const updateTechnicianRejected = (error) => ({
  type: UPDATE_TECHNICIAN_REJECTED,
  payload: error,
});

export const updateTechnician = (content) => (dispatch) => {
  dispatch(updateTechnicianFetching());
  return fetch(`${URL}/${content._id}`, {
    method: 'PUT',
    body: JSON.stringify(content),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
    .then((json) => {
      dispatch(updateTechnicianFulfilled(json));
    })
    .catch(() => {
      dispatch(updateTechnicianRejected());
    });
};
