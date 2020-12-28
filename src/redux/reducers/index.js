import { combineReducers } from 'redux';
import headerReducer from './header';

const allReducers = combineReducers({
  headerReducer,
});

export default allReducers;
