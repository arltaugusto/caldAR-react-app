import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import updateTitle from '../../../redux/actions/index';

const BoilersSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitle('Boilers'));
  });
  return (
        <h1>TODO BOLIERS</h1>
  );
};

export default BoilersSection;
