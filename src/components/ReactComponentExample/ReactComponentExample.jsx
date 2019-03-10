import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactComponentExample extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        const { text } = this.props;
        return (
            <div>
                { text }
            </div>
        );
    }
}

export default ReactComponentExample;
