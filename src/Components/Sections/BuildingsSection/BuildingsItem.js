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
          name='id'
          value={buildingsItem.id}
          onChange={onChange}
        />
        <input
          name='address'
          value={buildingsItem.address}
          onChange={onChange}
        />
        <input
          name='name'
          value={buildingsItem.name}
          onChange={onChange}
        />
        <input
          name='phone'
          value={buildingsItem.phone}
          onChange={onChange}
        />
        <input
          name='idCustomer'
          value={buildingsItem.idCustomer}
          onChange={onChange}
        />
        <input
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
