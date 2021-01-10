import UPDATE_TITLE from '../types/header';

const headerReducer = (state = { title: 'Home' }, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return { title: action.payload.title };
    default:
      return state;
  }
};

export default headerReducer;
