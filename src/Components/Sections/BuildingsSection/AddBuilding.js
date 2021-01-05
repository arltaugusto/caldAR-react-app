import React from 'react';
import { Form, Field } from 'react-final-form';
import './styles/AddBuildingStyle.css';
import TextInput from './TextInput';
import required from './validations';

const AddBuilding = (props) => (
  <Form
    onSubmit={props.onSubmit}
    render={(
      {
        handleSubmit, form, submitting, pristine,
      },
    ) => (
      <form
      className="formStyle"
      onSubmit={handleSubmit}>
        <div>
          <label>Address:</label>
          <Field
            component={TextInput}
            validate={required}
            type='text'
            name='address'
            placeholder='Address'
            value={props.buildingForm.address}
          />
        </div>
        <div>
          <label>Name:</label>
          <Field
            component={TextInput}
            validate={required}
            type='text'
            name='name'
            placeholder='Name'
            value={props.buildingForm.name}
          />
        </div>
        <div>
          <label>Phone</label>
          <Field type='number'
          component={TextInput}
          validate={required}
          name='phone'
          placeholder='Phone'
          value={props.buildingForm.phone}
          />
        </div>
        <div>
          <label>Id Customer</label>
          <Field type='string'
          component={TextInput}
          validate={required}
          name='idCustomer'
          placeholder='IdCustomer'
          value={props.buildingForm.idCustomer}
          />
        </div>
        <div>
        <label>Boilers</label>
          <Field type='string'
          component={TextInput}
          validate={required}
          name='boilers'
          placeholder='Boilers'
          value={props.buildingForm.boilers}
          />
        </div>
        <div>
        <button className="submitButton" type='submit' value='Send' disabled={submitting || pristine}>Send</button>
        <button type='button' onClick={form.reset} disabled={submitting || pristine}>Reset</button>
        </div>
      </form>
    )}
  />
);
export default AddBuilding;
