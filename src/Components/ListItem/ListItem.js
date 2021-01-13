import React, { useState } from 'react';
import './list-item.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteCustomer, updateCustomerFetch } from '../../redux/actions/customer';
import { showModal } from '../../redux/actions/modalAction';

const itemActions = {
  deleteCustomer,
  updateCustomerFetch,
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
  const [updateForm] = useState(getInitialState());
  const dispatch = useDispatch();

  return (<tr className="list-item-row">
          {Object.entries(props.item)
            .filter(([key]) => !props.notToShowKeys.includes(key))
            .map((entry) => <td key={entry[1] + props.item._id}>{entry[1]}</td>)
          }
          <td>
              <DeleteIcon onClick={() => dispatch(itemActions[props.deleteAction](props.id))}/>
              <EditIcon onClick={() => dispatch(showModal('addCustomer', { updateForm, updateAction: props.updateAction }))}/>
          </td>
    </tr>
  );
};

export default ListItem;
