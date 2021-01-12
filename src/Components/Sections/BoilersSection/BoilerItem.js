import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaPen, FaTrash } from 'react-icons/fa';
import { updateBoiler } from '../../../redux/actions/boiler';
import { showModal } from '../../../redux/actions/modalAction';
import './boilers-section.css';

const BoilerItem = (props) => {
  const [boilersItem, setboilersItem] = useState({
    ...props.boiler,
    isEditing: false,
  });

  const toggleEdit = () => {
    setboilersItem({
      ...boilersItem,
      isEditing: !boilersItem.isEditing,
    });
  };

  const onChange = (e) => {
    setboilersItem({
      ...boilersItem,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    toggleEdit();
    props.updateBoiler(boilersItem);
  };

  if (boilersItem.isEditing) {
    return (
      <ul className="ulStyle">
        <li className='liStyle'
          value={boilersItem.id}>
        </li>
        <input className='liStyle'
          type='text'
          name='typeId'
          value={boilersItem.typeId}
          onChange={onChange}
        />
        <input className='liStyle'
          type='text'
          name='maintainanceRate'
          value={boilersItem.maintainanceRate}
          onChange={onChange}
        />
        <input className='liStyle'
          type='number'
          name='hourEventualCost'
          value={boilersItem.hourEventualCost}
          onChange={onChange}
        />
        <input className='liStyle'
          type='text'
          name='idBuilding'
          value={boilersItem.idBuilding}
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
            { id: props.boilerIt._id, record: 'Boilers ', deleteAction: 'deleteBoiler' })}
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
