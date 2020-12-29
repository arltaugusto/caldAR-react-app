import { ADD_BUILDING, DELETE_BUILDING, UPDATE_BUILDING } from '../types/buildings';
import buildings from '../../data/mock_buildings.json';

const initialState = {
  list: buildings,
};

const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUILDING:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload,
        ],
      };
    case DELETE_BUILDING:
      return {
        ...state,
        list: state.list.filter((building) => building.id !== action.payload),
      };
    case UPDATE_BUILDING:
      return {
        ...state.map((building) => {
          let buildingUpdated = [];
          if (building.id === action.payload.id) {
            buildingUpdated = action.payload;
          }
          return buildingUpdated;
        }),
      };
    default:
      return state;
  }
};

export default buildingsReducer;
