import React from 'react';
import ClassNames from 'classnames';
import styles from './styles.scss';

const Button = ({children, type, size, onClick}) => {
    return (
        <button
            className={ClassNames({
                [styles.button]: true,
                [styles.buttonDanger]: type === 'danger',
                [styles.buttonLarge]: size
            })}
            onClick={onClick}
        >
            { children }
        </button>
    );
};

export default Button;
