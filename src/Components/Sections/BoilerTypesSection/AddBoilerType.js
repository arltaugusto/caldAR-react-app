import React from 'react';
import { Form, Field } from 'react-final-form';
import required from './validations';
import TextInput from './TextInput.jsx';

const addBoilerTypes = (props) => (
<div>
  <Form
    onSubmit={props.onSubmit}
    render={({
      handleSubmit, form, submitting, pristine,
    }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
          name='description'
          component={TextInput}
          placeholder='Description'
          label="Description:"
          validate={required}
          />
        </div>
        <div>
          <Field
          name='stock'
          component={TextInput}
          placeholder='Stock'
          label="Stock:"
          validate={required}
          />
        </div>
        <div>
          <button
          type='submit'
          disabled={submitting || pristine}
          >
          Submit
          </button>
        </div>
      </form>
    )}
  />
  </div>
);

export default addBoilerTypes;
