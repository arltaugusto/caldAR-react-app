import UPDATE_TITLE from '../types/header';

const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  payload: {
    title,
  },
});

export default updateTitle;
