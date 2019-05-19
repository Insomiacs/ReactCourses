import React from 'react';
import classNames from 'classnames';
import styles from './style.scss';

type Props = {
    children?: React.Node,
    className?: string
};

const Wrapper = (props: Props) => (
    <div
        className={classNames({
            [styles.wrapper]: true,
            [props.className]: true
        })}
    >
        {props.children}
    </div>
);

export default Wrapper;
