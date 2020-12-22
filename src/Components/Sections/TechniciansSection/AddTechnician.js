import React, { Component } from 'react';

export class addTechnician extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      hourRate: '',
      dailyCapacity: '',
      typeBoilersId: '',
    }

    onChange = (e) => this.setState({
      [e.target.name]: e.target.value,
    });

    onSubmit = (e) => {
      e.preventDefault();
      this.props.AddTechnician(this.state);
      this.setState(
        {
          firstName: '',
          lastName: '',
          email: '',
          hourRate: '',
          dailyCapacity: '',
          typeBoilersId: '',
        },
      );
    }

    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <input type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.onChange}/>
          <input type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.onChange}/>
          <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.onChange}/>
          <input type='number' name='hourRate' placeholder='Hour Rate' value={this.state.hourRate} onChange={this.onChange}/>
          <input type='number' name='dailyCapacity' placeholder='Daily Capacity' value={this.state.dailyCapacity} onChange={this.onChange}/>
          <input type='number' name='typeBoilersId' placeholder='Type Boilers Capacity' value={this.state.typeBoilersId} onChange={this.onChange}/>
          <input type='submit' onClick={this.props.AddTechnician} value='Send' />
        </form>
      );
    }
}

export default addTechnician;
