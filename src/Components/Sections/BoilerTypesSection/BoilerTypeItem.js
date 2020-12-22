import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import './BoilerType.css';

const BoilerTypeItem = (props) => {
  const [boilersTypeItem, setboilersTypeItem] = useState({
    ...props.boilerType,
    isEditing: false,
  });

  const toggleEdit = () => {
    setboilersTypeItem({
      ...boilersTypeItem,
      isEditing: !boilersTypeItem.isEditing,
    });
  };

  const onChange = (e) => {
    setboilersTypeItem({
      ...boilersTypeItem,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    console.log(boilersTypeItem);
    toggleEdit();
    props.updateBoilersTypes(boilersTypeItem);
  };

  if (boilersTypeItem.isEditing) {
    return (
      <ul>
        <li
          value={boilersTypeItem.id}>
        </li>
        <input
          type='text'
          name='description'
          value={boilersTypeItem.description}
          onChange={onChange}
        />
        <input
          type='number'
          name='stock'
          value={boilersTypeItem.stock}
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
      <li className="liStyle">{props.boilerType.id}</li>
      <li className="liStyle">{props.boilerType.description}</li>
      <li className="liStyle">{props.boilerType.stock}</li>
      <div className="liStyle">
          <button onClick={toggleEdit} className="actionButtons"><FaPen size={20}/></button>
          <button onClick={() => props.deleteBoilersTypes(props.boilerType.id)} className="actionButtons"><FaTrash size={20}/></button>
      </div>
    </ul>
  );
};

export default BoilerTypeItem;
