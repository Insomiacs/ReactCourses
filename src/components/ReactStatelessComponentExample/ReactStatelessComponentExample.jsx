import React from 'react';
import PropTypes from 'prop-types';

const ReactStatelessComponentExample = ({ text }) =>
    <div>{text}</div>
;

export default ReactStatelessComponentExample;

ReactStatelessComponentExample.propTypes = {
    text: PropTypes.string,
};
