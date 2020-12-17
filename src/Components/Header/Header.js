import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
    render = () => (
            <header className="header">
                <h1>{this.props.title}</h1>
            </header>
    )
}
