import React, { useEffect } from 'react';
import './technicians-section.css';

// FIXME use hooks instead of class Components
const TechniciansSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Technicians');
  });
  return (
    <h2>TO DO TECHNICIANS</h2>
  );
};

export default TechniciansSection;
