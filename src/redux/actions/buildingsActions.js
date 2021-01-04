import {
  GET_BUILDINGS_FETCHING,
  GET_BUILDINGS_FULFILLED,
  GET_BUILDINGS_REJECTED,
  ADD_BUILDING_FETCHING,
  ADD_BUILDING_FULFILLED,
  ADD_BUILDING_REJECTED,
  DELETE_BUILDING_FETCHING,
  DELETE_BUILDING_FULFILLED,
  DELETE_BUILDING_REJECTED,
  UPDATE_BUILDING_FETCHING,
  UPDATE_BUILDING_FULFILLED,
  UPDATE_BUILDING_REJECTED,
} from '../types/buildings';

const URL = 'https://rr-caldar-t3.herokuapp.com/api/buildings';

const getBuildingsFetching = () => ({
  type: GET_BUILDINGS_FETCHING,
});

const getBuildingsFulfilled = (list) => ({
  type: GET_BUILDINGS_FULFILLED,
  payload: list,
});

const getBuildingsRejected = () => ({
  type: GET_BUILDINGS_REJECTED,
});

export const getBuildings = () => (dispatch) => {
  dispatch(getBuildingsFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBuildingsFulfilled(response));
    })
    .catch(() => {
      dispatch(getBuildingsRejected());
    });
};

const addBuildingFetching = () => ({
  type: ADD_BUILDING_FETCHING,
});

const addBuildingFulfilled = (content) => ({
  type: ADD_BUILDING_FULFILLED,
  payload: content,
});

const addBuildingRejected = () => ({
  type: ADD_BUILDING_REJECTED,
});

export const addBuilding = (building) => (dispatch) => {
  dispatch(addBuildingFetching());
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(building),
  }).then((data) => data.json())
    .then((response) => {
      dispatch(addBuildingFulfilled(response));
    })
    .catch(() => {
      dispatch(addBuildingRejected());
    });
};

const deleteBuildingFetching = () => ({
  type: DELETE_BUILDING_FETCHING,
});

const deleteBuildingFulfilled = (payload) => ({
  type: DELETE_BUILDING_FULFILLED,
  payload,
});

const deleteBuildingRejected = () => ({
  type: DELETE_BUILDING_REJECTED,
});

export const deleteBuilding = (_id) => (dispatch) => {
  dispatch(deleteBuildingFetching());
  return fetch(`${URL}/${_id}`, { method: 'DELETE' })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBuildingFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteBuildingRejected());
    });
};

const updateBuildingFetching = () => ({
  type: UPDATE_BUILDING_FETCHING,
});

const updateBuildingFulfilled = (content) => ({
  type: UPDATE_BUILDING_FULFILLED,
  payload: content,
});

const updateBuildingRejected = (error) => ({
  type: UPDATE_BUILDING_REJECTED,
  payload: error,
});

export const updateBuilding = (content) => (dispatch) => {
  dispatch(updateBuildingFetching());
  return fetch(`${URL}/${content._id}`, {
    method: 'put',
    body: JSON.stringify(content),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
    .then((json) => {
      dispatch(updateBuildingFulfilled(json));
    })
    .catch(() => {
      dispatch(updateBuildingRejected());
    });
};
