import {
  FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS, ADD_CUSTOMER,
} from '../types/customers';

const initialState = {
  customersData: [],
  isLoading: true,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CUSTOMERS:
      return {
        ...state,
        isLoading: false,
        customersData: action.payload,
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customersData: [...state.customersData, action.payload],
      };
    default: {
      return state;
    }
  }
};

export default customerReducer;
