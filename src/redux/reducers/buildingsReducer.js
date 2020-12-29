import { ADD_BUILDING, DELETE_BUILDING, UPDATE_BUILDING } from '../types/buildings';
import buildings from '../../data/mock_buildings.json';

const initialState = {
  isLoading: false,
  list: buildings,
  error: false,
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
      break;
    default:
      return state;
  }
  return state;
};

export default buildingsReducer;
