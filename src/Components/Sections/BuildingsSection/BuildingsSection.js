import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { v4 as uuid } from 'uuid';
import { useDispatch, connect } from 'react-redux';
import AddBuilding from './AddBuilding';
import BuildingsItem from './BuildingsItem';
import updateTitle from '../../../redux/actions/index';
import {
  getBuildings,
  deleteBuilding,
  addBuilding,
  updateBuilding,
} from '../../../redux/actions/buildingsActions';

const BuildingsSection = (props) => {
  const dispatch = useDispatch();
  const [allBuildings, setAllBuildings] = useState(props.buildings.list);
  const [buildingForm, setBuildingForm] = useState({
    id: '',
    address: '',
    name: '',
    phone: '',
    idCustomer: '',
    boilers: [],
  });

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

  // Add Building
  const addBuildingForm = () => {
    const newBuilding = {
      id: uuid(),
      address: buildingForm.address,
      name: buildingForm.name,
      phone: buildingForm.phone,
      idCustomer: buildingForm.idCustomer,
      boilers: buildingForm.boilers,
    };
    setAllBuildings([...allBuildings, newBuilding]);
    setBuildingForm({
      id: '',
      address: '',
      name: '',
      phone: '',
      idCustomer: '',
      boilers: [],
    });
  };

  const onSubmit = (values) => {
    props.addBuilding(values);
    const newBuilding = {
      // id: uuid(),
      address: buildingForm.address,
      name: buildingForm.name,
      phone: buildingForm.phone,
      idCustomer: buildingForm.idCustomer,
      boilers: buildingForm.boilers,
    };
    addBuildingForm(newBuilding);
    setBuildingForm({
      id: '',
      address: '',
      name: '',
      phone: '',
      idCustomer: '',
      boilers: [],
    });
  };

  const onChange = (e) => setBuildingForm({
    ...buildingForm,
    [e.target.name]: e.target.value,
  });

  return (
    <div>
      <ul className="ulStyle">
        <li className="liStyle">Id</li>
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
          allBuildings={allBuildings}
          deleteBuilding={props.deleteBuilding}
          getBuildings={props.getBuildings}
          updateBuilding={props.updateBuilding}
        />
      ))}
      <AddBuilding
      onChange={onChange}
      onSubmit={onSubmit}
      buildingForm={buildingForm}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBuilding,
  deleteBuilding,
  getBuildings,
  updateBuilding,
}, dispatch);

const mapStateToProps = (state) => ({
  buildings: state.buildingsReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsSection);
