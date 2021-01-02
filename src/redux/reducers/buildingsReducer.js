// import { ADD_BUILDING, DELETE_BUILDING, UPDATE_BUILDING } from '../types/buildings';
// import buildings from '../../data/mock_buildings.json';

// const initialState = {
//   list: [...buildings],
// };

// const buildingsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BUILDING:
//       return {
//         ...state,
//         list: [
//           ...state.list,
//           action.payload,
//         ],
//       };
//     case DELETE_BUILDING:
//       return {
//         ...state,
//         list: state.list.filter((building) => building.id !== action.payload),
//       };
//     case UPDATE_BUILDING: {
//       return {
//         list: [...state.list.map((building) => {
//           if (building.id === action.payload.id) {
//             return action.payload;
//           }
//           return building;
//         })],
//       };
//     }
//     default:
//       return { ...state };
//   }
// };

// export default buildingsReducer;

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

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUILDINGS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BUILDINGS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_BUILDINGS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_BUILDING_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_BUILDING_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    case ADD_BUILDING_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_BUILDING_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_BUILDING_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((building) => building._id !== action.payload),
      };
    case DELETE_BUILDING_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case UPDATE_BUILDING_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_BUILDING_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list.map((building) => {
          if (building._id === action.payload._id) {
            return action.payload;
          }
          return building;
        })],
      };
    case UPDATE_BUILDING_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export default buildingsReducer;
