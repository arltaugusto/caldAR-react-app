import {
  FETCH_BOILERTYPE_REQUEST, FETCH_BOILER_TYPE, ADD_BOILER_TYPE,
  DELETE_BOILER_TYPE, UPDATE_BOILER_TYPE,
} from '../types/boilerType';

export const fetchBoilerTypeRequest = () => ({
  type: FETCH_BOILERTYPE_REQUEST,
});

export const onFetchBoilerTypeSucced = (boilerType) => ({
  type: FETCH_BOILER_TYPE,
  payload: boilerType,
});

export const fetchBoilerType = () => async (dispatch) => {
  dispatch(fetchBoilerTypeRequest());
  try {
    const response = await fetch('https://run.mocky.io/v3/ce765be3-7457-43f7-9ae8-cc58e6c5f21a');
    const data = await response.json();
    dispatch(onFetchBoilerTypeSucced(data));
  } catch (e) {
    console.log(e);
  }
};

export const addBoilerType = (item) => ({
  type: ADD_BOILER_TYPE,
  payload: {
    id: Math.floor(Math.random() * 10000),
    ...item,
  },
});

export const deleteBoilerType = (number) => ({
  type: DELETE_BOILER_TYPE,
  payload: number,
});

export const updateBoilerType = (item) => ({
  type: UPDATE_BOILER_TYPE,
  payload: item,
});
