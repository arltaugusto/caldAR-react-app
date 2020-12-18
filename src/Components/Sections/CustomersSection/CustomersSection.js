import React, { useEffect } from 'react';

const CustomersSection = (props) => {
  useEffect(() => {
    props.setHeaderTitle('Customers');
  });
  return (
        <h2>TO DO CUSTOMERS</h2>
  );
};

export default CustomersSection;
