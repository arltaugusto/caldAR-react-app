import React from 'react';
import { Link } from 'react-router-dom';
import OpacityIcon from '@material-ui/icons/Opacity';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PeopleIcon from '@material-ui/icons/People';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CategoryIcon from '@material-ui/icons/Category';
import menuItemStyles from './menuItem.module.css';

const MenuItem = (props) => {
  const getIconColor = (isSelected) => (isSelected ? '#8325FE' : '#fff');

  const imagesObj = {
    boilersImg: <OpacityIcon style={{ color: getIconColor(props.isSelected) }}/>,
    buildingsImg: <ApartmentIcon style={{ color: getIconColor(props.isSelected) }}/>,
    customersImg: <PeopleIcon style={{ color: getIconColor(props.isSelected) }}/>,
    techniciansImg: <PeopleIcon style={{ color: getIconColor(props.isSelected) }}/>,
    appointmentsImg: <EventAvailableIcon style={{ color: getIconColor(props.isSelected) }}/>,
    boilerTypesImg: <CategoryIcon style={{ color: getIconColor(props.isSelected) }}/>,
  };

  return (<div className={menuItemStyles.menuItem}>
            {imagesObj[props.img]}
            <Link onClick={() => props.handleSelect(props.id)} className={`${menuItemStyles.menuItemLabel} ${props.isSelected ? menuItemStyles.selected : ''}`} to={props.path}>{props.label}</Link>
        </div>
  );
};
export default MenuItem;
