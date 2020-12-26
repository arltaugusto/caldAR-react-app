import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import technicians from '../../../data/technicians.json';
import AddTechnician from './AddTechnician';
import TechnicianItem from './TechnicianItem';
import './technicians-section.css';
import updateTitle from '../../../redux/actions/index';

const TechniciansSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitle('Technicians'));
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
  const addTechnician = () => {
    const newTechnician = {
      id: uuid(),
      firstName: techniciansForm.firstName,
      lastName: techniciansForm.lastName,
      email: techniciansForm.email,
      hourRate: techniciansForm.hourRate,
      dailyCapacity: techniciansForm.dailyCapacity,
      typeBoilersId: techniciansForm.typeBoilersId,
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
  const updateTechnician = (updatedItem) => {
    const itemCopy = [...allTechnicians];
    const updatedTechnician = itemCopy.map((item) => (item.id === updatedItem.id
      ? updatedItem : item));
    setAllTechnicians(updatedTechnician);
  };
  return (
   <div >
     <div>
      <AddTechnician technicianForm={techniciansForm}
        onSubmit={onSubmit}
        onChange={onChange}
        addBoilerType={addTechnician}
      />
      </div>
      <ul className="ulStyle">
        <li className="liStyle-tit">Id</li>
        <li className="liStyle-tit">First Name</li>
        <li className="liStyle-tit">Last Name</li>
        <li className="liStyle-tit">Email</li>
        <li className="liStyle-tit">Hour Rate</li>
        <li className="liStyle-tit">Daily Capacity</li>
        <li className="liStyle-tit">Type Boilers</li>
        <li className="liStyle-tit">Actions</li>
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
