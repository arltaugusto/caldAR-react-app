import { Component } from 'react';
import './header.css';

export default class Header extends Component {
    
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}