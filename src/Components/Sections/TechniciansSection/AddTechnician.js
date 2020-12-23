import React from 'react';

const addTechnician = (props) => (
        <form onSubmit={props.onSubmit}>
          <input type='text' name='firstName' placeholder='First Name' value={props.firstName} onChange={props.onChange}/>
          <input type='text' name='lastName' placeholder='Last Name' value={props.lastName} onChange={props.onChange}/>
          <input type='text' name='email' placeholder='Email' value={props.email} onChange={props.onChange}/>
          <input type='text' name='hourRate' placeholder='Hour Rate' value={props.hourRate} onChange={props.onChange}/>
          <input type='number' name='dailyCapacity' placeholder='Daily Capacity' value={props.dailyCapacity} onChange={props.onChange}/>
          <input type='text' name='typeBoilersId' placeholder='Type Boilers' value={props.typeBoilersId} onChange={props.onChange}/>
          <input type='submit'className='submit-button' value='Add Technician' />
        </form>
);

export default addTechnician;
