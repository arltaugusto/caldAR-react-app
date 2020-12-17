import React from 'react';
import { Link } from 'react-router-dom';
import boilerImg from '../../Assets/boilers.svg';
import technicianImg from '../../Assets/technicians.svg';
import menuItemStyles from './menuItem.module.css';

const imagesObj = {
  boiler: boilerImg,
  technician: technicianImg,
};

const MenuItem = (props) => (
        <div className={menuItemStyles.menuItem}>
            <img src={imagesObj[props.img]}></img>
            <Link className={menuItemStyles.menuItemLabel} to={props.path}>{props.label}</Link>
        </div>
);

export default MenuItem;
