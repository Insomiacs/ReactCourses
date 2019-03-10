import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

class ReactPureComponentExample extends PureComponent {
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

export default ReactPureComponentExample;
