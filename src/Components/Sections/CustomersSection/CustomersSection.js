import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import ContentTable from '../../ContentTable/ContentTable';
import customerSectionStyles from './customer-section.module.css';
import updateTitle from '../../../redux/actions/index';
import { fetchCustomers } from '../../../redux/actions/customer';
import { showModal } from '../../../redux/actions/modalAction';

const CustomersSection = () => {
  const dispatch = useDispatch();
  const customersState = useSelector((state) => state.customersReducer);
  const [customSearchData, setCustomSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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
        .some((key) => (item[key] ? item[key].toString().toLowerCase().includes(valueLC) : false)),
    );
  };

  useEffect(() => {
    dispatch(updateTitle('Customers'));
    fetchCustomersData();
  }, []);

  const handleSearchInput = (event) => {
    const query = event.target.value;
    setSearchInput(query);
    const customerDataCopy = [...customersState.customersData];
    console.log(customerDataCopy);
    const filteredData = getFilteredData(customerDataCopy, query);
    setCustomSearchData(filteredData);
  };

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
            <input onChange={handleSearchInput} placeholder="Search"/>
          </div>
          <ContentTable
            columns={['Buildings', 'Type Of Client', 'Address', 'Email']}
            items={customSearchData.length || searchInput
              ? customSearchData : customersState.customersData}
            notToShowKeys={['id', '_id', 'createdAt', 'updatedAt', '__v']}
            updateAction='updateCustomerFetch'
            updateTitle='Update customer'
            removeAction='deleteCustomer'
          />
        </div>
        <div onClick={() => dispatch(showModal('addCustomer', {}))} className={customerSectionStyles.addButtonContainer}>
          <AddCircleIcon style={ { color: '#8325FE', width: 60, height: 60 }}/>
        </div>
      </div>
    </div>
  );
};

export default CustomersSection;
