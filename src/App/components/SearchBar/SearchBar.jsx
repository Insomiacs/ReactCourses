import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchQuery, selectSearchType } from '../../../redux/actions/search';
import { updateMovies } from '../../../redux/actions/movies';

import { spy } from 'sinon';

import Input from '../../../SharedComponents/Input';
import Button from '../../../SharedComponents/Button';

import styles from './style.scss';

class SearchBar  extends Component {

  state = {
    searchValue: ''
  };

  handleClick = () => {
    this.props.updateSearchQuery(this.state.searchValue)
  };

  changeSearchValue = (searchValue) => {
    this.setState({
      searchValue
    })
  };

  changeSearchType = (value) => () => {
    this.props.selectSearchType(value);
  };

  render() {
    const { search } = this.props;
    return (
      <div>
        <span className={styles.searchTitle}>FIND YOUR MOVIES</span>
        <Input
          onChange={this.changeSearchValue}
        />
        <div className={styles.searchButtons}>
          <div className={styles.searchCriteria}>
            <span className={styles.criteriaTitle}>SEARCH BY</span>
            <div className={styles.criteriaWrapper}>
              <Button
                  onClick={this.changeSearchType('title')}
                  type={search.type === 'title' ? 'danger' : ''}
              >
                Title
              </Button>
              <Button
                  onClick={this.changeSearchType('genre')}
                  type={search.type === 'genre' ? 'danger' : ''}
              >
                Genre
              </Button>
            </div>
          </div>
          <Button
            type="danger"
            size="large"
            onClick={this.handleClick}
          >
            Search
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({movies, search}) => ({
  movies,
  search
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateSearchQuery,
  selectSearchType,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
