import { combineReducers } from 'redux';
import headerReducer from './header';
import buildingsReducer from './buildingsReducer';
import boilerTypesReducer from './boilerTypeReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const allReducers = combineReducers({
  headerReducer,
  buildingsReducer,
  boilerTypesReducer,
  modalReducer,
  authReducer,
});

export default allReducers;
