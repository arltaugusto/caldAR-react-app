import { v4 as uuid } from 'uuid';
import { ADD_BUILDING, DELETE_BUILDING, UPDATE_BUILDING } from '../types/buildings';

export const addBuildingR = (content) => ({
  type: ADD_BUILDING,
  payload: {
    ...content,
    id: uuid(),
  },
});

export const deleteBuilding = (id) => ({
  type: DELETE_BUILDING,
  payload: id,
});

export const updateBuildingR = (content) => ({
  type: UPDATE_BUILDING,
  payload: content,
});
