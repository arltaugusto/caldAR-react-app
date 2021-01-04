import { combineReducers } from 'redux';
import headerReducer from './header';
import customersReducer from './customersReducer';

const allReducers = combineReducers({
  headerReducer,
  customersReducer,
});

export default allReducers;
