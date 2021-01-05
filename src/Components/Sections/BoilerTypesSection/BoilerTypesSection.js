/* eslint-disable no-param-reassign, no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, connect } from 'react-redux';
import updateTitle from '../../../redux/actions/index';
import AddBoilerType from './AddBoilerType';
import BoilerTypeItem from './BoilerTypeItem';
import {
  getBoilerTypes,
  deleteBoilerType,
  addBoilerType,
  updateBoilerType,
} from '../../../redux/actions/boilerType';

const BoilerTypesSection = (props) => {
  const dispatch = useDispatch();
  const [allBoilerTypes, setAllBoilerTypes] = useState(props.boilerTypes.list);
  const [boilerTypeForm, setboilerTypeForm] = useState({
    id: '',
    description: '',
    stock: '',
  });

  useEffect(() => {
    dispatch(updateTitle('BoilerTypes'));
  }, []);

  useEffect(() => {
    props.getBoilerTypes();
  }, [props.getBoilerTypes]);

  if (props.boilerTypes.isLoading) {
    return <div>Loading...</div>;
  }

  if (props.boilerTypes.error) {
    return <div>ERROR!!!</div>;
  }

  const addBoilerTypeForm = () => {
    const newBoilerType = {
      description: boilerTypeForm.description,
      stock: boilerTypeForm.stock,
    };
    setAllBoilerTypes([...allBoilerTypes, newBoilerType]);
    setboilerTypeForm({
      id: '',
      description: '',
      stock: '',
    });
  };

  const onSubmit = (values) => {
    props.addBoilerType(values);
    const newBoilerType = {
      description: boilerTypeForm.description,
      stock: boilerTypeForm.stock,
    };
    addBoilerTypeForm(newBoilerType);
    setboilerTypeForm({
      id: '',
      description: '',
      stock: '',
    });
  };

  const onChange = (e) => setboilerTypeForm({
    ...boilerTypeForm,
    [e.target.name]: e.target.value,
  });

  return (
    <div>
      <ul className="ulStyle">
        <li className="liStyle">Id</li>
        <li className="liStyle">Description</li>
        <li className="liStyle">Stock</li>
        <li className="liStyle">Actions</li>
      </ul>
      {props.boilerTypes.list.map((boilerType) => (
        <BoilerTypeItem
          key={boilerType._id}
          boilerType={boilerType}
          allBoilerTypes={allBoilerTypes}
          deleteBoilerType={props.deleteBoilerType}
          getBoilerTypes={props.getBoilerTypes}
          updateBoilerType={props.updateBoilerType}
        />
      ))}
      <AddBoilerType
      onChange={onChange}
      onSubmit={onSubmit}
      boilerTypeForm={boilerTypeForm}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBoilerType,
  deleteBoilerType,
  getBoilerTypes,
  updateBoilerType,
}, dispatch);

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypesReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypesSection);
