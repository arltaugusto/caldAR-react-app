/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

const TextInput = ({
  input,
  meta,
  label,
  placeholder,
}) => (
  <>
    <label>{label}</label>
    <input {...input} type='text' placeholder={placeholder} />
    {meta.error && meta.touched && <div>{meta.error}</div>}
  </>
);

export default TextInput;
