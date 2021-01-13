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

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHNICIANS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TECHNICIANS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_TECHNICIANS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_TECHNICIAN_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_TECHNICIAN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
        error: false,
      };
    case ADD_TECHNICIAN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_TECHNICIAN_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TECHNICIAN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((technician) => technician._id !== action.payload),
      };
    case DELETE_TECHNICIAN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case UPDATE_TECHNICIAN_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TECHNICIAN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list.map((technicianIt) => {
          if (technicianIt._id === action.payload._id) {
            return action.payload;
          }
          return technicianIt;
        })],
      };
    case UPDATE_TECHNICIAN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export default techniciansReducer;
