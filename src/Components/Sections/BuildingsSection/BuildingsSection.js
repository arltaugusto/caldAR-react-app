import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import buildings from '../../../data/mock_buildings.json';
import AddBuilding from './AddBuilding';
import BuildingsItem from './BuildingsItem';
import updateTitle from '../../../redux/actions/index';

const BuildingsSection = () => {
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

  const [allBuildings, setAllBuildings] = useState(buildings);

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
    addBuilding();
  };

  const onChange = (e) => setBuildingForm({
    ...buildingForm,
    [e.target.name]: e.target.value,
  });

  // Delete Building
  const deleteBuilding = (id) => {
    setAllBuildings([...allBuildings.filter((building) => building.id !== id)]);
  };

  // Update Building

  const updateBuilding = (buildingUpdate) => {
    const buildingsCopy = [...allBuildings];
    const updatedBuilding = buildingsCopy.map((item) => (item.id === buildingUpdate.id
      ? buildingUpdate : item));
    setAllBuildings(updatedBuilding);
  };

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
      {allBuildings.map((building) => (
        <BuildingsItem
          key={building.id}
          building={building}
          deleteBuilding={deleteBuilding}
          updateBuilding={updateBuilding}
        />
      ))}
      <AddBuilding
      addBuilding={addBuilding}
      onChange={onChange}
      onSubmit={onSubmit}
      buildingForm={buildingForm} />
    </div>
  );
};

export default BuildingsSection;
