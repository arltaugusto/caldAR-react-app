import { Component } from 'react';
import './list-item.css';
import deleteIcon from '../../Assets/delete.svg';
import editIcon from '../../Assets/edit.svg';
import TransitionModal from '../TransitionModal/TransitionModal';
import LabeledInput from '../LabeledInput/LabeledInput';

//FIXME use hooks instead of class components
export default class ListItem extends Component {

    constructor(props) {
        super(props);
        const technician = props.technician;
        this.state = {
            shouldOpenModal: false,
            email: technician.email,
            name: technician.name,
            boilers: technician.boilers
        }
    }

    handleOpen = () => {
        this.setState({
            ...this.state,
            shouldOpenModal: true,
        });
    };

    handleClose = () => {
        this.setState({
            email: this.props.technician.email,
            name: this.props.technician.name,
            boilers: this.props.technician.boilers,
            shouldOpenModal: false,
        });
    };

    onNameChange = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,
        });
    }

    onEmailChange = (event) => {
        this.setState({
            ...this.state,
            email: event.target.value,
        });
    }

    onBoilerTypeChange = (event) => {
        this.setState({
            ...this.state,
            boilers: event.target.value,
        });
    }

    getNewItem = () => {
        return {
            id: this.props.technician.id,
            name: this.state.name,
            email: this.state.email,
            boilers: this.state.boilers,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleUpdate(this.getNewItem());
        this.handleClose();
    }
    render = () => {
        return (
            <tr className="list-item-row">
                <th>{this.props.technician.name}</th>
                <th>{this.props.technician.email}</th>
                <th>{this.props.technician.boilers}</th>
                <th className="action-cell">
                    <div onClick={() => this.props.removeFromListCallback(this.props.technician.id)}>
                        <img src={deleteIcon}></img>
                    </div>
                    <div onClick={this.handleOpen}>
                        <img src={editIcon}></img>
                    </div>
                </th>
                <TransitionModal handleOpen={this.handleOpen} handleClose={this.handleClose} title="Update technician" open={this.state.shouldOpenModal}>
                    <form className="add-tenchnician-form" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <LabeledInput value={this.state.name} onChange={this.onNameChange} label="Name"/>
                            <LabeledInput value={this.state.email} onChange={this.onEmailChange} label="Email"/>
                        </div>
                        <div className="single-row">
                            <LabeledInput value={this.state.boilers} onChange={this.onBoilerTypeChange} label="Boiler Knowledge"/>
                        </div>
                        <button className="submit-button" type="submit" >Confirm</button>
                    </form>
                </TransitionModal>
            </tr>
        );
    }
}