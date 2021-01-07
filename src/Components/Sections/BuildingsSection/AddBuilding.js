import React from 'react';
import { Form, Field } from 'react-final-form';
import './styles/AddBuildingStyle.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextInput from './TextInput';
import required from './validations';
import { addBuilding } from '../../../redux/actions/buildingsActions';
import { closeModal } from '../../../redux/actions/modalAction';

const AddBuildings = (props) => {
  const onSubmit = (values) => {
    props.addBuilding(values);
    props.closeModal();
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={(
        {
          handleSubmit, form, submitting, pristine,
        },
      ) => (
        <form
        className="formStyle"
        onSubmit={handleSubmit}>
          <div className="formItem">
            <label>Address:</label>
            <Field
              component={TextInput}
              validate={required}
              type='text'
              name='address'
              placeholder='Address'
            />
          </div>
          <div className="formItem">
            <label>Name:</label>
            <Field
              component={TextInput}
              validate={required}
              type='text'
              name='name'
              placeholder='Name'
            />
          </div>
          <div className="formItem">
            <label>Phone</label>
            <Field type='number'
            component={TextInput}
            validate={required}
            name='phone'
            placeholder='Phone'
            />
          </div>
          <div className="formItem">
            <label>Id Customer</label>
            <Field type='string'
            component={TextInput}
            validate={required}
            name='idCustomer'
            placeholder='IdCustomer'
            />
          </div>
          <div className="formItem">
          <label>Boilers</label>
            <Field type='string'
            component={TextInput}
            validate={required}
            name='boilers'
            placeholder='Boilers'
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
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBuilding,
  closeModal,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddBuildings);
