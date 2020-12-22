import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const TechnicianItem = (props) => {
  const [technicianItem, setTechnicianItem] = useState({
    ...props.technician,
    isEditing: false,
  });

  const toggleEdit = () => {
    setTechnicianItem({ isEditing: !technicianItem.isEditing });
  };

  const onChange = (e) => {
    setTechnicianItem({ [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    toggleEdit();
    props.updateTechnician(technicianItem);
  };

  if (technicianItem.isEditing) {
    return (
      <ul>
        <input
          type='number'
          name='id'
          value={technicianItem.id}
          onChange={onChange}
        />
        <input
          type='text'
          name='firstName'
          value={technicianItem.firstName}
          onChange={onChange}
        />
        <input
          type='text'
          name='lastName'
          value={technicianItem.lastName}
          onChange={onChange}
        />
        <input
          type='text'
          name='email'
          value={technicianItem.email}
          onChange={onChange}
        />
        <input
        type='number'
          name='hourRate'
          value={technicianItem.hourRate}
          onChange={onChange}
        />
         <input
          type='number'
          name='dailyCapacity'
          value={technicianItem.dailyCapacity}
          onChange={onChange}
        />
        <input
          type='number'
          name='typeBoilersId'
          value={technicianItem.typeBoilersId}
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
      <li className="liStyle">{props.technician.id}</li>
      <li className="liStyle">{props.technician.firstName}</li>
      <li className="liStyle">{props.technician.lastName}</li>
      <li className="liStyle">{props.technician.email}</li>
      <li className="liStyle">{props.technician.hourRate}</li>
      <li className="liStyle">{props.technician.dailyCapacity}</li>
      <li className="liStyle">{props.technician.typeBoilersId}</li>
      <div className="liStyle">
          <button onClick={toggleEdit} className="actionButtons"><FaPen size={20}/></button>
          <button onClick={() => props.deleteTechnician(props.technician.id)} className="actionButtons"><FaTrash size={20}/></button>
      </div>
    </ul>
  );
};

export default TechnicianItem;
