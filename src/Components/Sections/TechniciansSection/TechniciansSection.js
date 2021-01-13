import React, { useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { bindActionCreators } from 'redux';
import { useDispatch, connect } from 'react-redux';
import './technicians-section.css';
import updateTitle from '../../../redux/actions/index';
import TechnicianItem from './TechnicianItem';
import {
  getTechnicians,
  deleteTechnician,
  addTechnician,
  updateTechnician,
} from '../../../redux/actions/technician';
import { showModal, closeModal } from '../../../redux/actions/modalAction';

const TechniciansSection = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle('Technicians'));
  }, []);

  useEffect(() => {
    props.getTechnicians();
  }, [props.getTechnicians]);

  if (props.tecnicos.isLoading) {
    return <div>Loading...</div>;
  }

  if (props.tecnicos.error) {
    return <div>ERROR!!!</div>;
  }

  const handleOpen = () => props.showModal('addTechnician', {});

  return (
   <div >
      <ul className="ulStyle">
        <li className="liStyle-tit">Id</li>
        <li className="liStyle-tit">First Name</li>
        <li className="liStyle-tit">Last Name</li>
        <li className="liStyle-tit">Email</li>
        <li className="liStyle-tit">Hour Rate</li>
        <li className="liStyle-tit">Daily Capacity</li>
        <li className="liStyle-tit">Type Boilers</li>
        <li className="liStyle-tit">Actions</li>
       </ul>
       {console.log(props.tecnicos)}
       {props.tecnicos.list.map((technicianIt) => (
        <TechnicianItem
          key={technicianIt._id}
          technician={technicianIt}
          deleteTechnician={props.deleteTechnician}
          updateTechnician={props.updateTechnician}
        />
       ))}
      <div onClick={handleOpen}>
        <AddCircleIcon style={ { color: '#8325FE', width: 60, height: 60 }}/>
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTechnician,
  deleteTechnician,
  getTechnicians,
  updateTechnician,
  showModal,
  closeModal,
}, dispatch);

const mapStateToProps = (state) => ({
  tecnicos: state.techniciansReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(TechniciansSection);
