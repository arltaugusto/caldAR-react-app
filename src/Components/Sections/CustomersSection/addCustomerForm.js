import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import FormSelect from '../../TransitionModal/Select/Select';
import { addCustomer } from '../../../redux/actions/customer';
import { closeModal } from '../../../redux/actions/modalAction';

const customerTypes = [
  { value: 'business', label: 'Business' },
  { value: 'particular', label: 'Particular' },
];

const addCustomerForm = () => {
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

  const submitHandler = (values) => {
    console.log(values);
    const newItem = {
      type: values.customerType,
      email: values.email,
      address: values.address,
    };
    dispatch(addCustomer(newItem));
    dispatch(closeModal());
  };

  return (
        <Form
          onSubmit={submitHandler}
          validate={validateForm}
          render={({
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <Field name="email">
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
                <Field name="customerType" initialValue="business">
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
              <Field name="address">
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
