import React from 'react';
import ClassNames from 'classnames';
import styles from './styles.scss';

type buttonProps = {
  type: string,
  size: string,
  className: string,
  children: React.Node,
  onClick: function
};

const Button = (props: buttonProps) => {
    return (
        <button
            className={ClassNames({
                [styles.button]: true,
                [styles.buttonDanger]: props.type === 'danger',
                [styles.buttonLarge]: props.size,
                [props.className]: true
            })}
            onClick={props.onClick}
        >
            { props.children }
        </button>
    );
};

export default Button;
