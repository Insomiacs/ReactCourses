import React from 'react';
import Input from '../../../SharedComponents/Input';
import Button from '../../../SharedComponents/Button';

import styles from './style.scss';

const SearchBar = () => (
    <div>
        <span className={styles.searchTitle}>FIND YOUR MOVIES</span>
        <Input />
        <div className={styles.searchButtons}>
            <div className={styles.searchCriteria}>
                <span className={styles.criteriaTitle}>SEARCH BY</span>
                <div className={styles.criteriaWrapper}>
                    <Button>Title</Button>
                    <Button>Genre</Button>
                </div>
            </div>
            <Button
                type="danger"
                size="large"
            >
                Search
            </Button>
        </div>
    </div>
);

export default SearchBar;
