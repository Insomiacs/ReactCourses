import React from 'react';
import Wrapper from '../../../SharedComponents/Wrapper';
import Logo from '../../../SharedComponents/Logo';

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
