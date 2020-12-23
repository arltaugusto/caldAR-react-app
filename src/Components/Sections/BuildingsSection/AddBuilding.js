import React from 'react';

const AddBuilding = (props) => (
  <form onSubmit={props.onSubmit}>
    <input type='number' name='id' placeholder='ID' value={props.buildingForm.id} onChange={props.onChange}/>
    <input type='text' name='address' placeholder='Address' value={props.buildingForm.address} onChange={props.onChange} />
    <input type='text' name='name' placeholder='Name' value={props.buildingForm.name} onChange={props.onChange}/>
    <input type='number' name='phone' placeholder='Phone' value={props.buildingForm.phone} onChange={props.onChange}/>
    <input type='number' name='idCustomer' placeholder='IdCustomer' value={props.buildingForm.idCustomer} onChange={props.onChange}/>
    <input type='number' name='boilers' placeholder='Boilers' value={props.buildingForm.boilers} onChange={props.onChange}/>
    <input type='submit' value='Send' />
  </form>
);

export default AddBuilding;
