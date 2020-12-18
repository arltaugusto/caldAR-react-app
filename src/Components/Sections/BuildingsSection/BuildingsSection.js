import React, { useEffect } from 'react';

const BuildingsSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Buildings');
  });
  return (
        <h2>TO DO BUILDINGS</h2>
  );
};

export default BuildingsSection;
