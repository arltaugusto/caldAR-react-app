import { combineReducers } from 'redux';
import headerReducer from './header';
import buildingsReducer from './buildingsReducer';

const allReducers = combineReducers({
  headerReducer,
  buildingsReducer,
});

export default allReducers;
