import React, { useEffect } from 'react';
import './technicians-section.css';

// FIXME use hooks instead of class Components
const TechniciansSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Technicians');
  });
  return (
   <div className='technicians-table-container'>
    <table >
      <tr className='table-titles'>
        <th >Name</th>
        <th >Email</th>
        <th >Boiler Knowledge</th>
        <th >Actions</th>
      </tr>
    </table>
   </div>
  );
};

export default TechniciansSection;
