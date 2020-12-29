import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import ContentTable from '../../ContentTable/ContentTable';
import TransitionModal from '../../TransitionModal/TransitionModal';
import FormSelect from '../../TransitionModal/Select/Select';
import customerSectionStyles from './customer-section.module.css';
import updateTitle from '../../../redux/actions/index';
import { fetchCustomers, onFetchCustomerSucced, addCustomer } from '../../../redux/actions/customer';

const CustomersSection = () => {
  const dispatch = useDispatch();
  const customersState = useSelector((state) => state.customersReducer);
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [customSearchData, setCustomSearchData] = useState([]);
  const [addCustomerForm, setAddCustomerForm] = useState({
    query: '',
    email: '',
    address: '',
    type: 'particular',
  });
  const customerTypes = [
    { value: 'business', label: 'Business' },
    { value: 'particular', label: 'Particular' },
  ];

  const fetchCustomersData = () => {
    try {
      dispatch(fetchCustomers());
    } catch (e) {
      console.log(e);
    }
  };

  // Passing an array with customers and query, returns a filtered array by value
  const getFilteredData = (initialData, value) => {
    const valueLC = value.toString().toLowerCase();
    return initialData.filter(
      (item) => Object.keys(item)
        .some((key) => item[key].toString().toLowerCase().includes(valueLC)),
    );
  };

  // FIXME handle with redux
  const removeFromList = (id) => {
    const customerDataCopy = [...customersState.customersData];
    const updatedData = customerDataCopy.filter((customer) => customer.id !== id);
    dispatch(onFetchCustomerSucced(updatedData));
    // This update is needed in case the user wants to delete in a search
    setCustomSearchData(getFilteredData(updatedData, addCustomerForm.query));
  };

  // FIXME handle with redux
  const handleUpdate = (newItem) => {
    const customersCpy = [...customersState.customersData];
    const updatedArray = customersCpy.map((value) => {
      if (value.id === newItem.id) {
        return newItem;
      }
      return value;
    });
    // This update is needed in case the user wants to edit in a search
    setCustomSearchData(getFilteredData(updatedArray, addCustomerForm.query));
    dispatch(onFetchCustomerSucced(updatedArray));
  };

  useEffect(() => {
    dispatch(updateTitle('Customers'));
    fetchCustomersData();
  }, []);

  // FIXME handle with redux
  const handleOpen = () => {
    setShouldOpenModal(true);
  };

  const handleSearchInput = (event) => {
    const query = event.target.value;
    const customerDataCopy = [...customersState.customersData];
    const filteredData = getFilteredData(customerDataCopy, query);
    setAddCustomerForm({
      ...addCustomerForm,
      query,
    });
    setCustomSearchData(filteredData);
  };

  // Should I implement redux, I'm not sending it as a prop to any component?
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      type: addCustomerForm.type,
      email: addCustomerForm.email,
      address: addCustomerForm.address,
    };
    dispatch(addCustomer(newItem));
    setAddCustomerForm({
      query: '',
      email: '',
      address: '',
      type: 'particular',
    });
    setShouldOpenModal(false);
  };

  const onInputChange = (event) => {
    setAddCustomerForm({
      ...addCustomerForm,
      [event.target.name]: event.target.value,
    });
  };

  /* Extract the form in order to send it to the ListItem as a prop. This way you will
   be able to fill the form on update

values: JSON with the values to fill the fields
inputHandler: function to handle the input fields
submitHanlder: function on submit
*/
  const getForm = (values, inputHandler, submitHandler) => (
      <form className="add-tenchnician-form" onSubmit={submitHandler}>
                <div className="row">
                    <TextField name="email" value={values.email} onChange={inputHandler} label="Email" variant="outlined" />
                    <FormSelect name="type" selectLabel="Customer Type" options={customerTypes} initialValue={values.type} handleChange={inputHandler}/>
                </div>
                <div className="single-row">
                  <TextField name="address" value={ values.address } onChange={inputHandler} label="Address" variant="outlined" />
                </div>
                <button className="submit-button" type="submit" >Confirm</button>
      </form>
  );

  if (customersState.isLoading) {
    return (
      <div className={customerSectionStyles.contentContainer}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={customerSectionStyles.contentContainer}>
      <div className={customerSectionStyles.center}>
        <div className={customerSectionStyles.tableContainer}>
          <div className={customerSectionStyles.searchBarCointainer}>
            <SearchIcon style={{ marginTop: '10px' }}/>
            <input onChange={handleSearchInput} placeHolder="Search"/>
          </div>
          <ContentTable
            columns={['Buildings', 'Type Of Client', 'Address', 'Email']}
            items={customSearchData.length || addCustomerForm.query
              ? customSearchData : customersState.customersData}
            notToShowKeys={['id', '_id', 'createdAt', 'updatedAt', '__v']}
            getForm={getForm}
            handleUpdate={handleUpdate}
            updateTitle='Update customer'
            removeFromListCallback={removeFromList}
          />
        </div>
        <div onClick={handleOpen} className={customerSectionStyles.addButtonContainer}>
          <AddCircleIcon style={ { color: '#8325FE', width: 60, height: 60 }}/>
        </div>
      </div>
      <TransitionModal setModal={setShouldOpenModal} handleOpen={handleOpen} title="Add new Customer" open={shouldOpenModal} >
        {getForm(addCustomerForm, onInputChange, handleSubmit)}
      </TransitionModal>
    </div>
  );
};

export default CustomersSection;
