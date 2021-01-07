import {
  SHOW_MODAL,
  CLOSE_MODAL,
} from '../types/modalTypes';

export const showModal = (modalForm, meta = {}) => ({
  type: SHOW_MODAL,
  modalForm,
  meta,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
