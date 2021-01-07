/* eslint-disable no-param-reassign, no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/modalAction';
import { deleteBuilding } from '../../redux/actions/buildingsActions';

const deleteActions = {
  deleteBuilding,
};

const deleteConfirmation = (props) => {
  const dispatch = useDispatch();
  const handleConfirmation = () => {
    dispatch(deleteActions[props.deleteAction](props.id));
    dispatch(closeModal());
  };
  return (
    <div>
        <div>
            <label>{`Do you want to delete this ${props.record}?`}</label>
        </div>
        <div>
            <button onClick={handleConfirmation}>
                Accept
            </button>
        </div>
        <div>
            <button onClick={() => dispatch(closeModal())}>Cancel</button>
        </div>
    </div>
  );
};

export default deleteConfirmation;
