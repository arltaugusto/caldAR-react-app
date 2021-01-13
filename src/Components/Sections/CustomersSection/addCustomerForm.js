import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import FormSelect from '../../TransitionModal/Select/Select';
import { addCustomer, updateCustomerFetch } from '../../../redux/actions/customer';
import { closeModal } from '../../../redux/actions/modalAction';

const customerTypes = [
  { value: 'business', label: 'Business' },
  { value: 'particular', label: 'Particular' },
];

const addCustomerForm = (props) => {
  const dispatch = useDispatch();
  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.username = 'Required';
    }
    if (!values.address) {
      errors.confirm = 'Required';
    }
    return errors;
  };

  const getNewItem = (values) => (
    {
      type: values.customerType,
      email: values.email,
      address: values.address,
    }
  );

  const handleUpdateSubmit = (values) => {
    dispatch(updateCustomerFetch({ ...getNewItem(values), _id: props.updateForm._id }));
    dispatch(closeModal());
  };

  const submitHandler = (values) => {
    dispatch(addCustomer(getNewItem(values)));
    dispatch(closeModal());
  };

  return (
        <Form
          onSubmit={props.updateAction ? handleUpdateSubmit : submitHandler}
          validate={validateForm}
          render={({
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <Field name="email" initialValue={props.updateAction ? props.updateForm.email : ''}>
                  {({ input }) => (
                      <TextField
                        name={input.name}
                        value={input.value}
                        onChange={input.onChange}
                        label="Email"
                        variant="outlined"
                        required={true}
                      />
                  )}
                </Field>
                <Field name="customerType" initialValue={props.updateAction ? props.updateForm.type : 'business'}>
                  {({ input, meta }) => (
                    <div>
                      <FormSelect
                        selectLabel="Customer Type"
                        options={customerTypes}
                        input={input}
                        meta={meta}
                      />
                    </div>
                  )}
                </Field>
              </div>
              <Field name="address" initialValue={props.updateAction ? props.updateForm.address : ''}>
                {({ input }) => (
                    <TextField
                      name={input.name}
                      value={ input.value }
                      onChange={input.onChange}
                      label="Address"
                      variant="outlined"
                      required={true}
                    />
                )}
              </Field>
                <button className="submit-button" type="submit">
                  Confirm
                </button>
            </form>
          )}
        />
  );
};

export default addCustomerForm;
