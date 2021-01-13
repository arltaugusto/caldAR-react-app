import { combineReducers } from 'redux';
import headerReducer from './header';
import boilerTypesReducer from './boilerTypeReducer';
import modalReducer from './modalReducer';
import customersReducer from './customersReducer';

const allReducers = combineReducers({
  headerReducer,
  boilerTypesReducer,
  modalReducer,
  customersReducer,
});

export default allReducers;
