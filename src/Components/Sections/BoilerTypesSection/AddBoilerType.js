import React from 'react';

const addBoilerTypes = (props) => (
        <form onSubmit={props.onSubmit}>
          <input type='text' name='description' placeholder='Description' value={props.boilerTypeForm.description} onChange={props.onChange}/>
          <input type='number' name='stock' placeholder='Stock' value={props.boilerTypeForm.stock} onChange={props.onChange}/>
          <input type='submit' value='Send' />
        </form>
);

export default addBoilerTypes;
