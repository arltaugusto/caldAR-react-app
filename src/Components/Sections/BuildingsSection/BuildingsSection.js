import React, { useEffect } from 'react';
import buildings from '../../../data/mock_buildings.json';
import ContentTable from '../../ContentTable/ContentTable';
import AddBuilding from './AddBuilding';

const BuildingsSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Buildings');
  }, []);

  return (
    <div>
      <ContentTable columns={['id', 'addres', 'name', 'phone', 'idCustomer', 'boilers', 'Actions']} items={buildings}/>
      <AddBuilding />
    </div>
  );
};

export default BuildingsSection;
