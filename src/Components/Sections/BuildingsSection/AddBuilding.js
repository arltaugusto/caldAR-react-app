import React, { Component } from 'react';

export class AddBuilding extends Component {
    state = {
      id: '',
      adress: '',
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
          adress: '',
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
      console.log('asd');
      e.preventDefault();
      this.props.addBuilding(this.state);
      this.setState(
        {
          id: '',
          adress: '',
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
          <input type='number' name='id' placeholder='Id Number' value={this.state.id} onChange={this.onChange}/>
          <input type='text' name='address' placeholder='Addres' value={this.state.address} onChange={this.onChange}/>
          <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.onChange}/>
          <input type='number' name='phone' placeholder='Phone' value={this.state.phone} onChange={this.onChange}/>
          <input type='number' name='idCustomer' placeholder='idCustomer' value={this.state.idCustomer} onChange={this.onChange}/>
          <input type='number' name='boilers' placeholder='Boilers' value={this.state.boilers} onChange={this.onChange}/>
          <input type='submit' value='Send' />
        </form>
      );
    }
}

/*  const formStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
  }; */

export default AddBuilding;
