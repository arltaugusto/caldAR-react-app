import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import ContentTable from '../../ContentTable/ContentTable';
import TransitionModal from '../../TransitionModal/TransitionModal';
import FormSelect from '../../TransitionModal/Select/Select';
import customerSectionStyles from './customer-section.module.css';

const CustomersSection = (props) => {
  const [customersData, setCustomersData] = useState([]);
  const [customSearchData, setCustomSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldOpenModal, setOpenModal] = useState(false);
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

  const fetchCustomersData = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/50509042-84f5-40d8-8a84-a67ab2a0d737');
      const data = await response.json();
      setCustomersData(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getFilteredData = (initialData, value) => {
    const valueLC = value.toString().toLowerCase();
    return initialData.filter(
      (item) => Object.keys(item)
        .some((key) => item[key].toString().toLowerCase().includes(valueLC)),
    );
  };

  const removeFromList = (id) => {
    const customerDataCopy = [...customersData];
    const updatedData = customerDataCopy.filter((customer) => customer.id !== id);
    setCustomersData(updatedData);
    setCustomSearchData(getFilteredData(updatedData, addCustomerForm.query));
  };

  const handleUpdate = (newItem) => {
    const customersCpy = [...customersData];
    const updatedArray = customersCpy.map((value) => {
      if (value.id === newItem.id) {
        return newItem;
      }
      return value;
    });
    setCustomSearchData(getFilteredData(updatedArray, addCustomerForm.query));
    setCustomersData(updatedArray);
  };

  useEffect(() => {
    props.setHeaderTitle('Customers');
    fetchCustomersData();
  }, []);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSearchInput = (event) => {
    const query = event.target.value;
    const customerDataCopy = [...customersData];
    const filteredData = getFilteredData(customerDataCopy, query);
    setAddCustomerForm({
      ...addCustomerForm,
      query,
    });
    setCustomSearchData(filteredData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      type: addCustomerForm.type,
      email: addCustomerForm.email,
      address: addCustomerForm.address,
      buildings: 'None',
    };
    const customerDataCopy = [...customersData];
    customerDataCopy.push(newItem);
    setCustomersData(customerDataCopy);
    setCustomSearchData(getFilteredData(customerDataCopy, addCustomerForm.query));
    setAddCustomerForm({
      query: '',
      email: '',
      address: '',
      type: 'particular',
    });
    handleClose();
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

  return (
    <div className={customerSectionStyles.contentContainer}>
          {isLoading
            ? <div className={customerSectionStyles.content}>
              <CircularProgress />
            </div>
            : <div className={customerSectionStyles.center}>
                <div className={customerSectionStyles.tableContainer}>
                  <div className={customerSectionStyles.searchBarCointainer}>
                    <SearchIcon style={{ marginTop: '10px' }}/>
                    <input onChange={handleSearchInput} placeHolder="Search"/>
                  </div>
                  <ContentTable
                    columns={['Type Of Client', 'Email', 'Address', 'Buildings']}
                    items={customSearchData.length || addCustomerForm.query
                      ? customSearchData : customersData}
                    notToShowKeys={['id']}
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
          }
          <TransitionModal handleClose={handleClose} handleOpen={handleOpen} title="Add new Customer" open={shouldOpenModal} >
            {getForm(addCustomerForm, onInputChange, handleSubmit)}
          </TransitionModal>
    </div>
  );
};

export default CustomersSection;
