import {
  SHOW_MODAL,
  CLOSE_MODAL,
} from '../types/modalTypes';

const initialState = {
  show: false,
  modalForm: 'addBuildings',
  meta: {},
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        modalForm: action.modalForm,
        meta: action.meta,
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modalsReducer;
