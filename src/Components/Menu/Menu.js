import React, { Component } from 'react';

import './menu.css';
import MenuItem from '../MenuItem/MenuItem';

// FIXME use hooks instead of class components
export default class Menu extends Component {
    render = () => (
            <aside className="menu">
                <div className="title-section">
                    <h2 className="caldAr-title">CaldAr</h2>
                </div>
                <div className="menu-options-section">
                    <MenuItem path="/boilers"img="boiler" label='Boilers'/>
                    <MenuItem path="/technicians" img="technician" label='Technicians'/>
                </div>
            </aside>
    )
}
