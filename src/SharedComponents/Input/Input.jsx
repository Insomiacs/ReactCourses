import React, {Component} from 'react';
import styles from './style.scss';

type Props = {
    onChange: function,
    submitSearchOnEnter: function
}

class Input extends Component<Props> {
    render() {
        return (
            <input
                type="text"
                className={styles.input}
                value={this.props.value}
                onChange={(e) => this.props.onChange(e)}
                onKeyUp={(e) => this.props.submitSearchOnEnter(e)}
            />
        );
    }
}

export default Input;
