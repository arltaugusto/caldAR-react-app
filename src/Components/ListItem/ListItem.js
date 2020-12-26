import React from 'react';
import './list-item.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// FIXME use hooks instead of class components
const ListItem = (props) => (
    <tr className="list-item-row">
          {Object.values(props.item).map((value) => <td key={value}>{value}</td>)}
          <td>
              <DeleteIcon onClick={() => props.removeFromListCallback(this.props.item.id)}/>
              <EditIcon onClick={props.handleUpdate}/>
          </td>
    </tr>
);

export default ListItem;
