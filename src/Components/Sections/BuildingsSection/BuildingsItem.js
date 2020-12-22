import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import './CustomersItems.css';

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

  const saveChanges = () => {
    toggleEdit();
    props.updateBuilding(buildingsItem);
  };

  if (buildingsItem.isEditing) {
    return (
      <ul>
        <input
          type='number'
          name='id'
          value={props.building.id}
          onChange={onChange}
        />
        <input
          type='text'
          name='address'
          value={props.building.address}
          onChange={onChange}
        />
        <input
          type='text'
          name='name'
          value={props.building.name}
          onChange={onChange}
        />
        <input
          type='number'
          name='phone'
          value={props.building.phone}
          onChange={onChange}
        />
        <input
        type='number'
          name='idCustomer'
          value={props.building.idCustomer}
          onChange={onChange}
        />
        <input
          type='number'
          name='boilers'
          value={props.building.boilers}
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
      <li className="liStyle">{props.building.id}</li>
      <li className="liStyle">{props.building.address}</li>
      <li className="liStyle">{props.building.name}</li>
      <li className="liStyle">{props.building.phone}</li>
      <li className="liStyle">{props.building.idCustomer}</li>
      <li className="liStyle">{props.building.boilers}</li>
      <div className="liStyle">
          <button onClick={toggleEdit} className="actionButtons"><FaPen size={20}/></button>
          <button onClick={() => props.deleteBuilding(props.building.id)} className="actionButtons"><FaTrash size={20}/></button>
      </div>
    </ul>
  );
};

export default BuildingsItem;
