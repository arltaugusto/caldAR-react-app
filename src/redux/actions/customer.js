import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS, ADD_CUSTOMER } from '../types/customers';

export const fetchCustomersRequest = () => ({
  type: FETCH_CUSTOMERS_REQUEST,
});

export const onFetchCustomerSucced = (customers) => ({
  type: FETCH_CUSTOMERS,
  payload: customers,
});

export const addNewCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer,
});

// FIXME export back origin url as a constant
export const fetchCustomers = () => async (dispatch) => {
  dispatch(fetchCustomersRequest());
  try {
    const response = await fetch('http://localhost:3001/api/customers/');
    const data = await response.json();
    dispatch(onFetchCustomerSucced(data));
  } catch (e) {
    console.log(e);
  }
};

export const addCustomer = (newItem) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/customers/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    const json = await response.json();
    dispatch(addNewCustomer(json));
  } catch (e) {
    console.log('Unable too add', e);
  }
};

export const deleteCustomer = (customerId) => async (dispatch, getState) => {
  try {
    const response = await fetch(`http://localhost:3001/api/customers/${customerId}`, {
      method: 'delete',
    });
    if (response.status === 200) {
      const { customersReducer } = getState();
      const customersCopy = [...customersReducer.customersData];
      dispatch(onFetchCustomerSucced(customersCopy.filter((cus) => cus._id !== customerId)));
    }
    console.log(response);
  } catch (e) {
    console.log('Unable to delete', e);
  }
};
