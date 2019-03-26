import React from 'react';
import Wrapper from '../../../SharedComponents/Wrapper';
import Logo from '../../../SharedComponents/Logo';
import SearchBar from '../SearchBar';

import styles from './styles.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Wrapper
                className={styles.headerWrapper}
            >
                <Logo />
                <SearchBar/>
            </Wrapper>
        </div>
    );
};

export default Header;
