import React from 'react';
import Wrapper from '../Wrapper';
import Logo from '../Logo';

import styles from './styles.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Wrapper>
                <Logo/>
            </Wrapper>
        </div>
    );
};

export default Footer;
