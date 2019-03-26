import React from 'react';
import Wrapper from '../Wrapper';
import Logo from '../Logo';
import Search from '../Search';

import styles from './styles.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Wrapper
                className={styles.headerWrapper}
            >
                <Logo />
                <Search/>
            </Wrapper>
        </div>
    );
};

export default Header;
