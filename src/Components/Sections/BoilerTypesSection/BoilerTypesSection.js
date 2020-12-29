import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import updateTitle from '../../../redux/actions/index';
import BoilerTypes from '../../../data/BoilerTypesMOCK.json';
import BoilerTypeItem from './BoilerTypeItem';
import AddBoilerType from './AddBoilerType';
import './BoilerType.css';

const BoilerTypesSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitle('Boiler Types'));
  }, []);

  const [boilerTypeForm, setBoilerTypeForm] = useState({
    id: '',
    description: '',
    stock: '',
  });

  const [allBoilerTypes, setAllBoilerTypes] = useState(BoilerTypes);

  const addBoilerType = () => {
    const newBoilerType = {
      id: Math.floor(Math.random() * 10000),
      description: boilerTypeForm.description,
      stock: boilerTypeForm.stock,
    };
    setAllBoilerTypes([...allBoilerTypes, newBoilerType]);
    setBoilerTypeForm({
      id: '',
      description: '',
      stock: '',
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addBoilerType();
  };

  const onChange = (e) => setBoilerTypeForm({
    ...boilerTypeForm,
    [e.target.name]: e.target.value,
  });

  const deleteBoilersTypes = (id) => {
    setAllBoilerTypes([...allBoilerTypes.filter((boilerType) => boilerType.id !== id)]);
  };

  const updateBoilersTypes = (updatedItem) => {
    const itemCopy = [...allBoilerTypes];
    const updatedBoilerTypes = itemCopy.map((item) => (item.id === updatedItem.id
      ? updatedItem : item));
    setAllBoilerTypes(updatedBoilerTypes);
  };

  return (
    <div>
            <ul className="ulStyle">
              <li className="liStyle">Id</li>
              <li className="liStyle">Description</li>
              <li className="liStyle">Stock</li>
              <li className="liStyle">Actions</li>
            </ul>
            {allBoilerTypes.map((boilerType) => (
            <BoilerTypeItem
              key={boilerType.id}
              boilerType={boilerType}
              deleteBoilersTypes={deleteBoilersTypes}
              updateBoilersTypes={updateBoilersTypes}
            />
            ))}
      <AddBoilerType
        boilerTypeForm={boilerTypeForm}
        onSubmit={onSubmit}
        onChange={onChange}
        addBoilerType={addBoilerType}
      />
    </div>
  );
};

export default BoilerTypesSection;
