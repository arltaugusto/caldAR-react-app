import { combineReducers } from 'redux';
import headerReducer from './header';
import customersReducer from './customersReducer';
import boilerTypeReducer from './boilerTypeReducer';

const allReducers = combineReducers({
  headerReducer,
  boilerTypeReducer,
});

export default allReducers;
