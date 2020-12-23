import React, { Component } from 'react';

export class AddBuilding extends Component {
  state = {
    id: '',
    address: '',
    name: '',
    phone: '',
    idCustomer: '',
    boilers: '',
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value,
  });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddBuilding(this.state);
    this.setState(
      {
        id: '',
        address: '',
        name: '',
        phone: '',
        idCustomer: '',
        boilers: '',
      },
    );
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBuilding(this.state);
    this.setState(
      {
        id: '',
        address: '',
        name: '',
        phone: '',
        idCustomer: '',
        boilers: '',
      },
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' name='address' placeholder='Address' value={this.state.address} onChange={this.onChange}/>
        <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.onChange}/>
        <input type='number' name='phone' placeholder='Phone' value={this.state.phone} onChange={this.onChange}/>
        <input type='number' name='idCustomer' placeholder='idCustomer' value={this.state.idCustomer} onChange={this.onChange}/>
        <input type='number' name='boilers' placeholder='Boilers' value={this.state.boilers} onChange={this.onChange}/>
        <input type='submit' onClick={this.props.AddBuilding} value='Send' />
      </form>
    );
  }
}

export default AddBuilding;
