import React from 'react';
import classNames from 'classnames';
import styles from './style.scss';

const Wrapper = ({children, className}) => {
    return (
        <div
            className={classNames({
                [styles.wrapper]: true,
                [className]: true
            })}

        >
            {children}
        </div>
    );
};

export default Wrapper;
