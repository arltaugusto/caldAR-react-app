import { combineReducers } from 'redux';
import headerReducer from './header';
import boilerTypesReducer from './boilerTypeReducer';
import boilersReducer from './boilersReducer';
import modalReducer from './modalReducer';

const allReducers = combineReducers({
  headerReducer,
  boilerTypesReducer,
  boilersReducer,
  modalReducer,
});

export default allReducers;
