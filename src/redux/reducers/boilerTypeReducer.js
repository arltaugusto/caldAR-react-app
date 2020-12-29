import {
  FETCH_BOILERTYPE_REQUEST, FETCH_BOILER_TYPE, ADD_BOILER_TYPE,
  DELETE_BOILER_TYPE, UPDATE_BOILER_TYPE,
} from '../types/boilerType';
import boilerTypes from '../../data/BoilerTypesMOCK.json';

const boilerTypeReducer = (state = boilerTypes, action) => {
  switch (action.type) {
    case FETCH_BOILERTYPE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BOILER_TYPE:
      return {
        ...state,
        isLoading: false,
        boilerTypeData: action.payload,
      };
    case ADD_BOILER_TYPE: {
      return [...state, action.payload];
    }
    case DELETE_BOILER_TYPE: {
      return [...state.filter((boilerType) => boilerType.number !== action.payload)];
    }
    case UPDATE_BOILER_TYPE: {
      return [
        ...state.map((boilerType) => {
          if (boilerType.number === action.payload.id) {
            boilerType = action.payload;
          }
          return boilerType;
        }),
      ];
    }
    default: {
      return state;
    }
  }
};

export default boilerTypeReducer;
