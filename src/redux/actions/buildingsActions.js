import { ADD_BUILDING, DELETE_BUILDING } from '../types/buildings';

export const addBuildingR = (content) => ({
  type: ADD_BUILDING,
  payload: content,
});

export const deleteBuilding = (id) => ({
  type: DELETE_BUILDING,
  payload: id,
});
