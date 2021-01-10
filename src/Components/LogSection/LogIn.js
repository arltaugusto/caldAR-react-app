import React from 'react';
import './styles.css';
import { Form, Field } from 'react-final-form';

const LogIn = ({
  login,
}) => {
  const onSubmitLogin = (values) => {
    login(values);
  };

  return (
    <Form
    onSubmit={onSubmitLogin}
    render={(
      {
        handleSubmit, form, submitting, pristine,
      },
    ) => (
      <form
        className="form-style"
        onSubmit={handleSubmit}>
          <div className="form-item">
          <label>Email:</label>
            <Field
              className="input"
              component='input'
              type='text'
              name='email'
              placeholder='example@email.com'
            />
          </div>
          <div className="form-item">
            <label>Password:</label>
            <Field
              className="input"
              type='password'
              name='password'
              component='input'
            />
          </div>
          <button type='submit' value='login' disabled={submitting || pristine}>Log in</button>
      </form>
    )}
  />
  );
};

export default LogIn;
