import { combineReducers } from 'redux';
import headerReducer from './header';
import buildingsReducer from './buildingsReducer';
import modalReducer from './modalReducer';

const allReducers = combineReducers({
  headerReducer,
  buildingsReducer,
  modalReducer,
});

export default allReducers;
