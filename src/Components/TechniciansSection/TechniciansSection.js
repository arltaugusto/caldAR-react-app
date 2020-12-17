import { Component } from 'react';
import './technicians-section.css';
import techniciansData from '../../data/MOCK_DATA.json';
import ListItem from '../ListItem/ListItem';
import TransitionsModal from '../TransitionModal/TransitionModal.js'
import LabeledInput from '../LabeledInput/LabeledInput';
import plus from '../../Assets/plus.svg';


//FIXME use hooks instead of class Components
export default class TechniciansSection extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            shouldOpenModal: false,
            boilers: '',
            email: '',
            name: '',
            technicians: techniciansData
        };
        this.removeFromList = this.removeFromList.bind(this);
    }

    componentDidMount() {
        this.props.setHeaderCallback('Technicians');
    }

    removeFromList = (id) => {
        const stateCopy = [...this.state.technicians];
        this.setState({technicians: stateCopy.filter(tech => tech.id !== id)});
    }

    handleOpen = () => {
        this.setState({
            ...this.state,
            shouldOpenModal: true,
        });
    };
    
    handleClose = () => {
        this.setState({
            ...this.state,
            shouldOpenModal: false,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.floor(Math.random() * 10000),
            name: this.state.name,
            email: this.state.email,
            boilers: this.state.boilers
        };
        this.setState({
            shouldOpenModal: false,
            boilers: '',
            email: '',
            name: '',
            technicians: [...this.state.technicians, newItem],
        })
    }

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

    handleUpdate = (newItem) => {
        const techniciansCpy = [...this.state.technicians];
        const updatedArray = techniciansCpy.map(value => {
            if (value.id === newItem.id) {
                return newItem;
            }
            return value;
        });
        this.setState({
            technicians: updatedArray,
        });
    }

    render = () => {
        return (
            <div className="editing-container">
                <div className="technicians-table-container shadow">
                    <table>
                        <tr className="table-titles">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Boiler Knowledge</th>
                            <th>Actions</th>
                        </tr>
                        {
                            this.state.technicians.map(value =>
                                <ListItem 
                                    key={value.id}
                                    removeFromListCallback={this.removeFromList}
                                    technician={value}
                                    handleUpdate={this.handleUpdate}
                                />)
                        }
                    </table>
                </div>
                <TransitionsModal handleOpen={this.handleOpen} handleClose={this.handleClose} title="Add technician" open={this.state.shouldOpenModal}>
                    <form className="add-tenchnician-form" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <LabeledInput onChange={this.onNameChange} label="Name"/>
                            <LabeledInput onChange={this.onEmailChange} label="Email"/>
                        </div>
                        <div className="single-row">
                            <LabeledInput onChange={this.onBoilerTypeChange} label="Boiler Knowledge"/>
                        </div>
                        <button className="submit-button" type="submit" >Confirm</button>
                    </form>
                </TransitionsModal>
                <div className="add-button-container">
                    <div onClick={this.handleOpen}>
                        <img src={plus}/>
                    </div>
                </div>
            </div>
        );
    }
}