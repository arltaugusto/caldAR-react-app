import boilerImg from '../../Assets/boilers.svg';
import technicianImg from '../../Assets/technicians.svg';
import menuItemStyles from './menuItem.module.css'
import { Link } from 'react-router-dom';

const imagesObj = {
    boiler: boilerImg,
    technician: technicianImg,
};


const MenuItem = props => {
    console.log(menuItemStyles);
    return (
        <div className={menuItemStyles.menuItem}>
            <img src={imagesObj[props.img]}></img>
            <Link className={menuItemStyles.menuItemLabel} to={props.path}>{props.label}</Link>
        </div>
    );
}

export default MenuItem;
