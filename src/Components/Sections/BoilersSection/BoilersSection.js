import React, { useEffect } from 'react';

const BoilersSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Boilers');
  });
  return (
        <h2>TO DO BOILERS</h2>
  );
};

export default BoilersSection;
