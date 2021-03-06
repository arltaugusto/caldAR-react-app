import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const TechnicianItem = (props) => {
  const [technicianItem, setTechnicianItem] = useState({
    ...props.technician,
    isEditing: false,
  });

  const toggleEdit = () => {
    setTechnicianItem({
      ...technicianItem,
      isEditing: !technicianItem.isEditing,
    });
  };

  const onChange = (e) => {
    setTechnicianItem({
      ...technicianItem,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    toggleEdit();
    props.updateTechnician(technicianItem);
  };

  if (technicianItem.isEditing) {
    return (
      <ul className="ulStyle">
        <li className='liStyle'>
          {technicianItem.id}
        </li>
        <li className='liStyle'>
          <input
            type='text'
            name='firstName'
            value={technicianItem.firstName}
            onChange={onChange}
          />
        </li>
        <li className='liStyle'>
          <input
            type='text'
            name='lastName'
            value={technicianItem.lastName}
            onChange={onChange}
          />
        </li>
        <li className='liStyle'>
          <input
            type='text'
            name='email'
            value={technicianItem.email}
            onChange={onChange}
          />
        </li>
        <li className='liStyle'>
          <input
          type='text'
            name='hourRate'
            value={technicianItem.hourRate}
            onChange={onChange}
          />
        </li>
        <li className='liStyle'>
         <input
          type='number'
          name='dailyCapacity'
          value={props.technician.dailyCapacity}
          onChange={onChange}
        />
        </li>
        <li className='liStyle'>
          <input
            type='text'
            name='typeBoilersId'
            value={technicianItem.typeBoilersId}
            onChange={onChange}
          />
        </li>
        <div>
          <button onClick={saveChanges} className='submit-button'>Save</button>
          <button onClick={toggleEdit} className='submit-button'>Cancel</button>
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
