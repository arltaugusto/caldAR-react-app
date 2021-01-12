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

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

const boilersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOILERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BOILERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_BOILERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_BOILER_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_BOILER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
        error: false,
      };
    case ADD_BOILER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_BOILER_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_BOILER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((boiler) => boiler._id !== action.payload),
      };
    case DELETE_BOILER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case UPDATE_BOILER_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_BOILER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list.map((boiler) => {
          if (boiler._id === action.payload._id) {
            return action.payload;
          }
          return boiler;
        })],
      };
    case UPDATE_BOILER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export default boilersReducer;
