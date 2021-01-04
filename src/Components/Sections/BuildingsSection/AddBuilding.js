import React from 'react';
import { Form, Field } from 'react-final-form';

const AddBuilding = (props) => (
  <Form
    onSubmit={props.onSubmit}
    render={(
      {
        handleSubmit, form,
      },
    ) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Address:</label>
          <Field
            type='text'
            name='address'
            placeholder='Address'
            value={props.buildingForm.address}
            component='input'
          />
        </div>
        <div>
          <label>Name:</label>
          <Field
            type='text'
            name='name'
            placeholder='Name'
            value={props.buildingForm.name}
            component='input'
          />
        </div>
        <div>
          <label>Phone</label>
          <Field type='number'
          name='phone'
          placeholder='Phone'
          value={props.buildingForm.phone}
          component='input'
          />
        </div>
        <div>
          <label>Id Customer</label>
          <Field type='string'
          name='idCustomer'
          placeholder='IdCustomer'
          value={props.buildingForm.idCustomer}
          component='input'
          />
        </div>
        <div>
        <label>Boilers</label>
          <Field type='string'
          name='boilers'
          placeholder='Boilers'
          value={props.buildingForm.boilers}
          component='input'
          />
        </div>
        <div>
        <input type='submit' value='Send' />
        </div>
      </form>
    )}
  />
);
export default AddBuilding;
