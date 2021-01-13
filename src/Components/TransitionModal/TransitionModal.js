/* eslint-disable no-param-reassign, no-underscore-dangle */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { closeModal } from '../../redux/actions/modalAction';
import AddBoilerType from '../Sections/BoilerTypesSection/AddBoilerType';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';
import AddCustomerForm from '../Sections/CustomersSection/addCustomerForm';
import './modal.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    // boxShadow: theme.shadows[5],
  },
}));

const formsObject = {
  addBoilerType: () => <AddBoilerType />,
  deleteConfirmation: (meta) => <DeleteConfirmation id={meta.id}
      record={meta.record}
      deleteAction={meta.deleteAction}
    />,
  addCustomer: () => <AddCustomerForm />,
};

// FIXME use arrow function
export default function TransitionsModal() {
  const classes = useStyles();
  const modalState = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={modalState.show}
          onClose={() => dispatch(closeModal())}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalState.show}>
            <div className={`${classes.paper} modal`}>
              {formsObject[modalState.modalForm](modalState.meta)}
            </div>
          </Fade>
        </Modal>
  );
}
