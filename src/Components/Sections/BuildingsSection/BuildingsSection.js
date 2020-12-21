import React, { useEffect, useState } from 'react';
import buildings from '../../../data/mock_buildings.json';
import AddBuilding from './AddBuilding';
import BuildingsItem from './BuildingsItem';

const BuildingsSection = (props) => {
  const [buildingForm, setBuildingForm] = useState({
    adress: '',
    name: '',
    phone: '',
    idCustomer: '',
    boilers: [],
  });

  const [allBuildings, setAllBuildings] = useState(buildings);

  useEffect(() => {
    props.setHeaderTitle('Buildings');
  }, []);

  // Add Building
  const addBuilding = ({
    adress, name, phone, idCustomer, boilers,
  }) => {
    console.log('entre');
    const newBuilding = {
      id: 105,
      adress,
      name,
      phone,
      idCustomer,
      boilers,
    };
    setAllBuildings([...buildingForm.building, newBuilding]);
    setBuildingForm({
      adress: '',
      name: '',
      phone: '',
      idCustomer: '',
      boilers: [],
    });
  };

  const deleteBuilding = () => {
    console.log('asd');
  };

  const updateBuilding = () => {
    console.log('asd');
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
      <AddBuilding buildings={buildings} addBuilding={addBuilding} />
    </div>
  );
};

export default BuildingsSection;
