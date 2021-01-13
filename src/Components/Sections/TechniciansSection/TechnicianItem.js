import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaPen, FaTrash } from 'react-icons/fa';
import { updateTechnician } from '../../../redux/actions/technician';
import { showModal } from '../../../redux/actions/modalAction';

const TechnicianItem = (props) => {
  const [technicianIt, setTechnicianItem] = useState({
    ...props.technicianIt,
    isEditing: false,
  });

  const toggleEdit = () => {
    setTechnicianItem({
      ...technicianIt,
      isEditing: !technicianIt.isEditing,
    });
  };

  const onChange = (e) => {
    setTechnicianItem({
      ...technicianIt,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    toggleEdit();
    props.updateTechnician(technicianIt);
  };

  if (technicianIt.isEditing) {
    return (
      <ul className="ulStyle">
        <li className='liStyle'>
          {technicianIt._id}
        </li>
        <li className='liStyle'>
          <input
            type='text'
            name='firstName'
            value={technicianIt.firstName}
            onChange={onChange}
          />
        </li>
        <li className='liStyle'>
          <input
            type='text'
            name='lastName'
            value={technicianIt.lastName}
            onChange={onChange}
          />
        </li>
        <li className='liStyle'>
          <input
            type='text'
            name='email'
            value={technicianIt.email}
            onChange={onChange}
          />
        </li>
        <li className='liStyle'>
          <input
          type='text'
            name='hourRate'
            value={technicianIt.hourRate}
            onChange={onChange}
          />
        </li>
        <li className='liStyle'>
         <input
          type='number'
          name='dailyCapacity'
          value={technicianIt.dailyCapacity}
          onChange={onChange}
        />
        </li>
        <li className='liStyle'>
          <input
            type='text'
            name='typeBoilersId'
            value={technicianIt.typeBoilersId}
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
      <li className="liStyle">{props.technicianIt._id}</li>
      <li className="liStyle">{props.technicianIt.firstName}</li>
      <li className="liStyle">{props.technicianIt.lastName}</li>
      <li className="liStyle">{props.technicianIt.email}</li>
      <li className="liStyle">{props.technicianIt.hourRate}</li>
      <li className="liStyle">{props.technicianIt.dailyCapacity}</li>
      <li className="liStyle">{props.technicianIt.typeBoilersId}</li>
      <div className="liStyle">
          <button onClick={toggleEdit} className="actionButtons"><FaPen size={20}/></button>
          <button onClick={() => props.showModal('deleteConfirmation',
            { id: props.technicianIt._id, record: 'Technician ', deleteAction: 'deleteTechnician' })}
             className="actionButtons"><FaTrash size={20}/></button>
      </div>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateTechnician,
  showModal,
}, dispatch);

const mapStateToProps = (state) => ({
  techncianIt: state.techniciansReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(TechnicianItem);
