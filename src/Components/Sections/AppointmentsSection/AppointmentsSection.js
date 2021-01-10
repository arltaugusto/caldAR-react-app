import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import updateTitle from '../../../redux/actions/index';

const AppointmentsSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitle('Appointments'));
  });
  return (
    <h2>TO DO APPOINTMENTS</h2>
  );
};

export default AppointmentsSection;
