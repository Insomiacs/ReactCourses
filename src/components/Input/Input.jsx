import React, {Component} from 'react';
import styles from './style.scss';

class Input extends Component {
    state = {
        value: ''
    };

    render() {
        return (
            <input
                type="text"
                className={styles.input}
            />
        );
    }
}

export default Input;
