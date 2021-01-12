import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaPen, FaTrash } from 'react-icons/fa';
import { updateBoiler } from '../../../redux/actions/boiler';
import { showModal } from '../../../redux/actions/modalAction';
import './boilers-section.css';

const BoilerItem = (props) => {
  const [boilerItem, setboilersItem] = useState({
    ...props.boilerIt,
    isEditing: false,
  });

  const toggleEdit = () => {
    setboilersItem({
      ...boilerItem,
      isEditing: !boilerItem.isEditing,
    });
  };

  const onChange = (e) => {
    setboilersItem({
      ...boilerItem,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    toggleEdit();
    props.updateBoiler(boilerItem);
  };

  if (boilerItem.isEditing) {
    return (
      <ul className="ulStyle">
        <li className='liStyle'
          value={boilerItem.id}>
        </li>
        <input className='liStyle'
          type='text'
          name='typeId'
          value={boilerItem.typeId}
          onChange={onChange}
        />
        <input className='liStyle'
          type='text'
          name='maintainanceRate'
          value={boilerItem.maintainanceRate}
          onChange={onChange}
        />
        <input className='liStyle'
          type='number'
          name='hourEventualCost'
          value={boilerItem.hourEventualCost}
          onChange={onChange}
        />
        <input className='liStyle'
          type='text'
          name='idBuilding'
          value={boilerItem.idBuilding}
          onChange={onChange}
        />
        <div>
          <button onClick={saveChanges} className="submit-button">SAVE</button>
          <button onClick={toggleEdit} className="submit-button">CANCEL</button>
        </div>
      </ul>
    );
  }

  return (
    <ul className="ulStyle">
      <li className="liStyle">{props.boilerIt._id}</li>
      <li className="liStyle">{props.boilerIt.typeId}</li>
      <li className="liStyle">{props.boilerIt.maintainanceRate}</li>
      <li className="liStyle">{props.boilerIt.hourEventualCost}</li>
      <li className="liStyle">{props.boilerIt.idBuilding}</li>
      <div className="liStyle">
          <button onClick={toggleEdit} className="actionButtons"><FaPen size={20}/></button>
          <button onClick={() => props.showModal('deleteConfirmation',
            { id: props.boilerIt._id, record: 'Boiler ', deleteAction: 'deleteBoiler' })}
            className="actionButtons"><FaTrash size={20}/>
          </button>
      </div>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateBoiler,
  showModal,
}, dispatch);

const mapStateToProps = (state) => ({
  boiler: state.boilersReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilerItem);
