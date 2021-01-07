import React, { useState } from 'react';

import './menu.css';
import MenuItem from '../MenuItem/MenuItem';

const menuItems = [
  {
    id: 1, path: '/boilers', label: 'Boilers', img: 'boilersImg',
  },
  {
    id: 2, path: '/technicians', label: 'Technicians', img: 'techniciansImg',
  },
  {
    id: 3, path: '/appointments', label: 'Appointments', img: 'appointmentsImg',
  },
  {
    id: 4, path: '/buildings', label: 'Buildings', img: 'buildingsImg',
  },
  {
    id: 5, path: '/customers', label: 'Customers', img: 'customersImg',
  },
  {
    id: 6, path: '/boilerTypes', label: 'Boiler Types', img: 'boilerTypesImg',
  },
];
// FIXME use hooks instead of class components
const Menu = () => {
  const [selected, setSelected] = useState();

  const handleMenuItemClick = (id) => {
    setSelected(id);
  };

  return (
            <aside className="menu">
                <div className="title-section">
                    <h2 className="caldAr-title">CaldAr</h2>
                </div>
                <div className="menu-options-section">
                    { menuItems.map((item) => <MenuItem
                        key={item.id}
                        id={item.id}
                        path={item.path}
                        img={item.img}
                        label={item.label}
                        isSelected={selected === item.id}
                        handleSelect={handleMenuItemClick}
                    />)
                    }
                </div>
            </aside>
  );
};

export default Menu;
