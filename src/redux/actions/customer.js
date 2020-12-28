import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS } from '../types/customers';

export const fetchCustomersRequest = () => ({
  type: FETCH_CUSTOMERS_REQUEST,
});

export const onFetchCustomerSucced = (customers) => ({
  type: FETCH_CUSTOMERS,
  payload: customers,
});

export const fetchCustomers = () => async (dispatch) => {
  dispatch(fetchCustomersRequest());
  try {
    const response = await fetch('https://run.mocky.io/v3/50509042-84f5-40d8-8a84-a67ab2a0d737');
    const data = await response.json();
    dispatch(onFetchCustomerSucced(data));
  } catch (e) {
    console.log(e);
  }
};
