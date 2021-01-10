import { combineReducers } from 'redux';
import headerReducer from './header';
import boilerTypesReducer from './boilerTypeReducer';
import modalReducer from './modalReducer';

const allReducers = combineReducers({
  headerReducer,
  boilerTypesReducer,
  modalReducer,
});

export default allReducers;
