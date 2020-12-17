import { Component } from 'react';
import './labeled-input.css';

//FIXME use hooks instead of class components
export default class LabeledInput extends Component {
    
    render = () => {
        return (
            <label className="labeled-input">
                <div class="max-width">{this.props.label}</div>
                <input onChange={this.props.onChange} value={this.props.value} />
            </label>
        );
    }
}
