import React, { useState } from 'react';
import './list-item.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import TransitionModal from '../TransitionModal/TransitionModal';
import { deleteCustomer } from '../../redux/actions/customer';

const itemActions = {
  deleteCustomer,
};

const ListItem = (props) => {
  // Every module has differents keys, this function set the states according to each case.
  const getInitialState = () => {
    const state = { id: props.item.id };
    Object.entries(props.item).forEach(([key, value]) => {
      state[key] = value;
    });
    return state;
  };
  const [updateForm, setUpdateForm] = useState(getInitialState());
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUpdateForm({
      ...updateForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleOpen = () => {
    setShouldOpenModal(true);
  };

  const getNewItem = () => {
    const newItem = {};
    Object.entries(updateForm).forEach(([key, value]) => { newItem[key] = value; });
    return newItem;
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    props.handleUpdate(getNewItem());
    setShouldOpenModal(false);
  };

  return (<tr className="list-item-row">
          {Object.entries(props.item)
            .filter(([key]) => !props.notToShowKeys.includes(key))
            .map((entry) => <td key={entry[1] + props.item._id}>{entry[1]}</td>)
          }
          <td>
              <DeleteIcon onClick={() => dispatch(itemActions[props.deleteAction](props.id))}/>
              <EditIcon onClick={handleOpen}/>
          </td>
          <TransitionModal
             setModal={setShouldOpenModal}
             handleOpen={handleOpen}
             title={props.updateTitle}
             open={shouldOpenModal}
          >
            {props.getForm(updateForm, handleInputChange, handleUpdateSubmit) }
          </TransitionModal>
    </tr>
  );
};

export default ListItem;
