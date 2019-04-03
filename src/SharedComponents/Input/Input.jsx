import React, {Component} from 'react';
import styles from './style.scss';

class Input extends Component {

    render() {
        return (
            <input
                type="text"
                className={styles.input}
                onChange={(e) => this.props.onChange(e.target.value)}
            />
        );
    }
}

export default Input;
