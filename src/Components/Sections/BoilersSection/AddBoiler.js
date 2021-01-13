import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import required from './validations';
import TextInput from './TextInput.jsx';
import { addBoiler } from '../../../redux/actions/boiler';
import { closeModal } from '../../../redux/actions/modalAction';

const addBoilers = (props) => {
  const onSubmit = (values) => {
    props.addBoiler(values);
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
              name='typeId'
              component={TextInput}
              placeholder='Type Id'
              label="Type Id: "
              validate={required}
              />
            </div>
            <div>
              <Field
              name='maintainanceRate'
              component={TextInput}
              placeholder='Maintainance Rate'
              label="Maintainance Rate: "
              validate={required}
              />
            </div>
            <div>
              <Field
              name='hourEventualCost'
              component={TextInput}
              placeholder='Hour Eventual Cost'
              label="Hour Eventual Cost: "
              validate={required}
              />
            </div>
            <div>
              <Field
              name='idBuilding'
              component={TextInput}
              placeholder='Id Building'
              label="Id Building: "
              validate={required}
              />
            </div>
            <div>
              <button
              className='submit-button'
              type='submit'
              disabled={submitting || pristine}
              >
              Add Boiler
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBoiler,
  closeModal,
}, dispatch);

export default connect(null, mapDispatchToProps)(addBoilers);
