/* eslint-disable no-param-reassign, no-underscore-dangle */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaPen, FaTrash } from 'react-icons/fa';
import { updateBoilerType } from '../../../redux/actions/boilerType';
import { showModal } from '../../../redux/actions/modalAction';
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
    toggleEdit();
    props.updateBoilerType(boilersTypeItem);
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
      <li className="liStyle">{props.boilerType._id}</li>
      <li className="liStyle">{props.boilerType.description}</li>
      <li className="liStyle">{props.boilerType.stock}</li>
      <div className="liStyle">
          <button onClick={toggleEdit} className="actionButtons"><FaPen size={20}/></button>
          <button onClick={() => props.showModal('deleteConfirmation',
            { id: props.boilerType._id, record: 'Boiler Type', deleteAction: 'deleteBoilerType' })}
            className="actionButtons"><FaTrash size={20}/>
          </button>
      </div>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateBoilerType,
  showModal,
}, dispatch);

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypesReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypeItem);
