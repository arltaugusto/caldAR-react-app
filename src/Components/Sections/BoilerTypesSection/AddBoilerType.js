import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import required from './validations';
import TextInput from './TextInput.jsx';
import { addBoilerType } from '../../../redux/actions/boilerType';
import { closeModal } from '../../../redux/actions/modalAction';

const addBoilerTypes = (props) => {
  const onSubmit = (values) => {
    props.addBoilerType(values);
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
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBoilerType,
  closeModal,
}, dispatch);

export default connect(null, mapDispatchToProps)(addBoilerTypes);
