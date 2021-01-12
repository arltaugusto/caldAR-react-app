/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import React from 'react';
import './styles.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { loginWithFirebase } from '../../redux/actions/authActions';

const LogIn = ({
  login,
}) => {
  const onSubmitLogin = (values) => {
    console.log(values);
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
              type='email'
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
          <button type='submit' value='Log in' disabled={submitting || pristine}>Log in</button>
      </form>
    )}
  />
  );
};

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({
    login: loginWithFirebase,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(LogIn);
