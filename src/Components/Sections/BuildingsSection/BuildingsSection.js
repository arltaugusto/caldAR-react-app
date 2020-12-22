import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import buildings from '../../../data/mock_buildings.json';
import AddBuilding from './AddBuilding';
import BuildingsItem from './BuildingsItem';

const BuildingsSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Buildings');
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
  const addBuilding = ({
    address, name, phone, idCustomer, boilers,
  }) => {
    const newBuilding = {
      id: uuid(),
      address,
      name,
      phone,
      idCustomer,
      boilers,
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
      onCange={onChange}
      onSubmit={onSubmit}
      buildingForm={buildingForm} />
    </div>
  );
};

export default BuildingsSection;
