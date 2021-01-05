import {
  SHOW_MODAL,
  CLOSE_MODAL,
} from '../types/modalsTypes';

const initialState = {
  show: false,
  modalType: null,
  meta: {},
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        modalType: action.modalType,
        meta: action.meta,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default modalsReducer;
