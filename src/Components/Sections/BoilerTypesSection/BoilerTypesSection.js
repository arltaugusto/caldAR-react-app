/* eslint-disable no-param-reassign, no-underscore-dangle */
import React, { useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { bindActionCreators } from 'redux';
import { useDispatch, connect } from 'react-redux';
import updateTitle from '../../../redux/actions/index';
import BoilerTypeItem from './BoilerTypeItem';
import {
  getBoilerTypes,
  deleteBoilerType,
  addBoilerType,
  updateBoilerType,
} from '../../../redux/actions/boilerType';
import { showModal, closeModal } from '../../../redux/actions/modalAction';

const BoilerTypesSection = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle('BoilerTypes'));
  }, []);

  useEffect(() => {
    props.getBoilerTypes();
  }, [props.getBoilerTypes]);

  if (props.boilerTypes.isLoading) {
    return <div>Loading...</div>;
  }

  if (props.boilerTypes.error) {
    return <div>ERROR!!!</div>;
  }

  const handleOpen = () => props.showModal('addBoilerType', {});

  return (
    <div>
      <ul className="ulStyle">
        <li className="liStyle">Id</li>
        <li className="liStyle">Description</li>
        <li className="liStyle">Stock</li>
        <li className="liStyle">Actions</li>
      </ul>
      {props.boilerTypes.list.map((boilerType) => (
        <BoilerTypeItem
          key={boilerType._id}
          boilerType={boilerType}
          deleteBoilerType={props.deleteBoilerType}
          getBoilerTypes={props.getBoilerTypes}
          updateBoilerType={props.updateBoilerType}
        />
      ))}
      <div onClick={handleOpen}>
        <AddCircleIcon style={ { color: '#8325FE', width: 60, height: 60 }}/>
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBoilerType,
  deleteBoilerType,
  getBoilerTypes,
  updateBoilerType,
  showModal,
  closeModal,
}, dispatch);

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypesReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypesSection);
