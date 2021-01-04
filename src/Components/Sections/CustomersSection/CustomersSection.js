import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import ContentTable from '../../ContentTable/ContentTable';
import TransitionModal from '../../TransitionModal/TransitionModal';
// import FormSelect from '../../TransitionModal/Select/Select';
import customerSectionStyles from './customer-section.module.css';
import updateTitle from '../../../redux/actions/index';
import { fetchCustomers, addCustomer } from '../../../redux/actions/customer';

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
  // const customerTypes = [
  //   { value: 'business', label: 'Business' },
  //   { value: 'particular', label: 'Particular' },
  // ];

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

  useEffect(() => {
    dispatch(updateTitle('Customers'));
    fetchCustomersData();
  }, []);

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
  const submitHandler = async (values) => {
    console.log(values);
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
  const getForm = (formValues, inputHandler, onSubmit) => (
    <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.username = 'Required';
            }
            if (!values.address) {
              errors.confirm = 'Required';
            }
            return errors;
          }}
          render={({
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <Field name="email">
                  {({ input, meta }) => (
                  <div>
                      <TextField name={input.name} onChange={input.onChange} value={input.value} label="Email" variant="outlined" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                  )}
                </Field>
          {/* <Field name="customerType">
            {({ meta }) => (
              <div>
                <FormSelect
                selectLabel="Customer Type"
                options={customerTypes}
                initialValue={formValues.type} handleChange={inputHandler}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field> */}
              </div>
              <Field name="address">
                {({ input, meta }) => (
                  <div>
                    <TextField name={input.name} onChange={input.onChange} value={ input.value } label="Address" variant="outlined" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
                <button className="submit-button" type="submit">
                  Confirm
                </button>
            </form>
          )}
        />
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
            updateAction='updateCustomerFetch'
            updateTitle='Update customer'
            removeAction='deleteCustomer'
          />
        </div>
        <div onClick={handleOpen} className={customerSectionStyles.addButtonContainer}>
          <AddCircleIcon style={ { color: '#8325FE', width: 60, height: 60 }}/>
        </div>
      </div>
      <TransitionModal setModal={setShouldOpenModal} handleOpen={handleOpen} title="Add new Customer" open={shouldOpenModal} >
        {getForm(addCustomerForm, onInputChange, submitHandler)}
      </TransitionModal>
    </div>
  );
};

export default CustomersSection;
