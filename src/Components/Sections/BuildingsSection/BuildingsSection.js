import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { v4 as uuid } from 'uuid';
import { useDispatch, connect } from 'react-redux';
import AddBuilding from './AddBuilding';
import BuildingsItem from './BuildingsItem';
import updateTitle from '../../../redux/actions/index';
import { addBuildingR, deleteBuilding } from '../../../redux/actions/buildingsActions';

const BuildingsSection = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitle('Buildings'));
  }, []);

  const [buildingForm, setBuildingForm] = useState({
    id: '',
    address: '',
    name: '',
    phone: '',
    idCustomer: '',
    boilers: [],
  });

  const [allBuildings, setAllBuildings] = useState(props.buildings.list);

  // Add Building
  const addBuilding = () => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    props.addBuildingR(buildingForm);
    const newBuilding = {
      id: uuid(),
      address: buildingForm.address,
      name: buildingForm.name,
      phone: buildingForm.phone,
      idCustomer: buildingForm.idCustomer,
      boilers: buildingForm.boilers,
    };
    addBuilding(newBuilding);
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
          key={building.id}
          building={building}
          allBuildings={allBuildings}
          deleteBuilding={props.deleteBuilding}
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
  addBuildingR,
  deleteBuilding,
}, dispatch);

const mapStateToProps = (state) => ({
  buildings: state.buildingsReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsSection);
