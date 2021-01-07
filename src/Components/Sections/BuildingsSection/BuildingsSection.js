import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, connect } from 'react-redux';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BuildingsItem from './BuildingsItem';
import updateTitle from '../../../redux/actions/index';
import {
  getBuildings,
  deleteBuilding,
  addBuilding,
  updateBuilding,
} from '../../../redux/actions/buildingsActions';
import { showModal, closeModal } from '../../../redux/actions/modalAction';

const BuildingsSection = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle('Buildings'));
  }, []);

  useEffect(() => {
    props.getBuildings();
  }, [props.getBuildings]);

  if (props.buildings.isLoading) {
    return <div>Loading...</div>;
  }

  if (props.buildings.error) {
    return <div>ERROR!!!</div>;
  }

  const handleOpen = () => props.showModal('addBuildings', {});

  return (
    <div>
      <ul className="ulStyle">
        {/* <li className="liStyle">Id</li> */}
        <li className="liStyle">Address</li>
        <li className="liStyle">Name</li>
        <li className="liStyle">Phone</li>
        <li className="liStyle">Id Customers</li>
        <li className="liStyle">Boilers</li>
        <li className="liStyle">Actions</li>
      </ul>
      {props.buildings.list.map((building) => (
        <BuildingsItem
          key={building._id}
          building={building}
          deleteBuilding={props.deleteBuilding}
          getBuildings={props.getBuildings}
          updateBuilding={props.updateBuilding}
        />
      ))}
        <div onClick={handleOpen}>
        <AddCircleIcon style={ {
          color: '#8325FE',
          width: 60,
          height: 60,
          cursor: 'pointer',
        }}/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBuilding,
  deleteBuilding,
  getBuildings,
  updateBuilding,
  showModal,
  closeModal,
}, dispatch);

const mapStateToProps = (state) => ({
  buildings: state.buildingsReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsSection);
