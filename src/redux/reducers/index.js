import { combineReducers } from 'redux';
import headerReducer from './header';
import boilerTypesReducer from './boilerTypeReducer';

const allReducers = combineReducers({
  headerReducer,
  boilerTypesReducer,
});

export default allReducers;
