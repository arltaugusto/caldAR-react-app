import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import technicians from '../../../data/technicians.json';
import AddTechnician from './AddTechnician';
import TechnicianItem from './TechnicianItem';
import './technicians-section.css';

const TechniciansSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Technicians');
  });
  const [techniciansForm, setTechniciansForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    hourRate: '',
    dailyCapacity: '',
    typeBoilersId: [],
  });
  const [allTechnicians, setAllTechnicians] = useState(technicians);

  // Add Technician
  const addTechnician = ({
    firstName, lastName, email, hourRate, dailyCapacity, typeBoilersId,
  }) => {
    const newTechnician = {
      id: uuid(),
      firstName,
      lastName,
      email,
      hourRate,
      dailyCapacity,
      typeBoilersId,
    };
    setAllTechnicians([...allTechnicians, newTechnician]);
    setTechniciansForm({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      hourRate: '',
      dailyCapacity: '',
      typeBoilersId: [],
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTechnician();
  };

  const onChange = (e) => setTechniciansForm({
    ...techniciansForm,
    [e.target.name]: e.target.value,
  });

  // Delete Technician
  const deleteTechnician = (id) => {
    setAllTechnicians([...allTechnicians.filter((technician) => technician.id !== id)]);
  };
  const updateTechnician = () => {
  };
  return (
   <div >
      <AddTechnician technicianForm={techniciansForm}
        onSubmit={onSubmit}
        onChange={onChange}
        addBoilerType={addTechnician}
      />
     <ul className="ulStyle">
        <li className="liStyle">Id</li>
        <li className="liStyle">First Name</li>
        <li className="liStyle">Last Name</li>
        <li className="liStyle">Email</li>
        <li className="liStyle">Hour Rate</li>
        <li className="liStyle">Daily Capacity</li>
        <li className="liStyle">Type Boilers</li>
        <li className="liStyle">Actions</li>
      </ul>
      {allTechnicians.map((technician) => (
        <TechnicianItem
        key={technician.id}
        technician={technician}
        deleteTechnician={deleteTechnician}
        updateTechnician={updateTechnician}
      />
      ))}
   </div>
  );
};

export default TechniciansSection;
