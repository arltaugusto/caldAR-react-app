/* eslint-disable no-param-reassign, no-underscore-dangle */
import {
  GET_BOILERTYPES_FETCHING,
  GET_BOILERTYPES_FULFILLED,
  GET_BOILERTYPES_REJECTED,
  ADD_BOILERTYPE_FETCHING,
  ADD_BOILERTYPE_FULFILLED,
  ADD_BOILERTYPE_REJECTED,
  DELETE_BOILERTYPE_FETCHING,
  DELETE_BOILERTYPE_FULFILLED,
  DELETE_BOILERTYPE_REJECTED,
  UPDATE_BOILERTYPE_FETCHING,
  UPDATE_BOILERTYPE_FULFILLED,
  UPDATE_BOILERTYPE_REJECTED,
} from '../types/boilerType';

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

const boilerTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOILERTYPES_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BOILERTYPES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_BOILERTYPES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_BOILERTYPE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    case ADD_BOILERTYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_BOILERTYPE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((boilerType) => boilerType._id !== action.payload),
      };
    case DELETE_BOILERTYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case UPDATE_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_BOILERTYPE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list.map((boilerType) => {
          if (boilerType._id === action.payload._id) {
            return action.payload;
          }
          return boilerType;
        })],
      };
    case UPDATE_BOILERTYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export default boilerTypesReducer;
