import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaPen, FaTrash } from 'react-icons/fa';
import { updateBuilding } from '../../../redux/actions/buildingsActions';
import './styles/CustomersItems.css';

const BuildingsItem = (props) => {
  const [buildingsItem, setBuildingsItem] = useState({
    ...props.building,
    isEditing: false,
  });

  const toggleEdit = () => {
    setBuildingsItem({
      ...buildingsItem,
      isEditing: !buildingsItem.isEditing,
    });
  };

  const onChange = (e) => {
    setBuildingsItem({
      ...buildingsItem,
      [e.target.name]: e.target.value,
    });
  };

  // Update Building

  const saveChanges = () => {
    toggleEdit();
    props.updateBuilding(buildingsItem);
  };

  if (buildingsItem.isEditing) {
    return (
      <ul>
        <input
          type='text'
          name='id'
          value={buildingsItem.id}
          onChange={onChange}
        />
        <input
          type='text'
          name='address'
          value={buildingsItem.address}
          onChange={onChange}
        />
        <input
          type='text'
          name='name'
          value={buildingsItem.name}
          onChange={onChange}
        />
        <input
          // type='number'
          name='phone'
          value={buildingsItem.phone}
          onChange={onChange}
        />
        <input
          // type='number'
          name='idCustomer'
          value={buildingsItem.idCustomer}
          onChange={onChange}
        />
        <input
          type='string'
          name='boilers'
          value={buildingsItem.boilers}
          onChange={onChange}
        />
        <div>
          <button onClick={saveChanges} className="actionButtons">SAVE</button>
          <button onClick={toggleEdit} className="actionButtons">CANCEL</button>
        </div>
      </ul>
    );
  }

  return (
    <ul className="ulStyle">
      <li className="liStyle">{props.building._id}</li>
      <li className="liStyle">{props.building.address}</li>
      <li className="liStyle">{props.building.name}</li>
      <li className="liStyle">{props.building.phone}</li>
      <li className="liStyle">{props.building.idCustomer}</li>
      <li className="liStyle">{props.building.boilers}</li>
      <div className="liStyle">
          <button onClick={toggleEdit} className="actionButtons"><FaPen size={20}/></button>
          <button onClick={() => props.deleteBuilding(props.building._id)} className="actionButtons"><FaTrash size={20}/></button>
      </div>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateBuilding,
}, dispatch);

const mapStateToProps = (state) => ({
  buildings: state.buildingsReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsItem);
