import React, { useEffect } from 'react';

const AppointmentsSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Appointments');
  });
  return (
    <h2>TO DO APPOINTMENTS</h2>
  );
};

export default AppointmentsSection;
