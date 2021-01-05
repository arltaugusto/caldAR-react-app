import { combineReducers } from 'redux';
import headerReducer from './header';
import buildingsReducer from './buildingsReducer';
import modalsReducer from './modalsReducer';

const allReducers = combineReducers({
  headerReducer,
  buildingsReducer,
  modalsReducer,
});

export default allReducers;
