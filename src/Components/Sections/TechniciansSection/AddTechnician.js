import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import required from './validations';
import TextInput from './TextInput.jsx';
import { addTechnician } from '../../../redux/actions/technician';
import { closeModal } from '../../../redux/actions/modalAction';

const addTechnicians = (props) => {
  const onSubmit = (values) => {
    props.addTechnician(values);
    props.closeModal();
  };
  return (
    <div>
       <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit, form, submitting, pristine,
        }) => (
        <form onSubmit={handleSubmit}>
          <div>
          <Field
            label='First Name: '
            name='firstName'
            component={TextInput}
            placeholder='First Name'
            validate={required}
          />
          <Field
            label='Last Name: '
            name='lastName'
            component={TextInput}
            placeholder='Last Name'
            validate={required}
           />
          <Field
            label='Email: '
            name='email'
            component={TextInput}
            placeholder='Email'
            validate={required}
           />
          <Field
            label='Hour Rate: '
            name='hourRate'
            component={TextInput}
            placeholder='Hour Rate'
            validate={required}
          />
          <Field
            label='Daily Capacity: '
            name='dailyCapacity'
            component={TextInput}
            placeholder='Daily Capacity'
            validate={required}
          />
          <Field
            label='Type Boilers: '
            name='typeBoilersId'
            component={TextInput}
            placeholder='Type Boilers'
            validate={required}
          />
        </div>
        <div>
          <button
            type='submit'
            className='submit-button'
            disabled={submitting || pristine}
          >
            Add Technician
          </button>
        </div>
        </form>
        )}
        />
        </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTechnician,
  closeModal,
}, dispatch);

export default connect(null, mapDispatchToProps)(addTechnicians);
