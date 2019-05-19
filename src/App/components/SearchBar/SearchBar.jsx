import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { updateSearchQuery, selectSearchType } from '../../../redux/actions/search';
import { updateMovies } from '../../../redux/actions/movies';

import Input from '../../../SharedComponents/Input';
import Button from '../../../SharedComponents/Button';

import styles from './style.scss';

class SearchBar  extends PureComponent {

  state = {
    searchValue: ''
  };

  static getDerivedStateFromProps(nextProps){
    const { match: { params }, search } = nextProps;
    if(params.query && params.query !== search.searchQuery) {
      nextProps.updateSearchQuery(params.query);
      return {
        searchValue: params.query
      }
    }
    return null;
  }

  changeSearchValue = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  };

  handleSubmitSearch = () => {
    this.updateMovies();
  };

  submitSearchOnEnter = (event) => {
    if(event.keyCode === 13) {
      this.updateMovies();
    }
  };

  updateMovies = () => {
    const { history } = this.props;
    const { searchValue } = this.state;
    if (!searchValue) {
      history.push(`/`);
      this.props.updateSearchQuery('');
    } else {
      history.push(`/search/${searchValue}`);
    }
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
          submitSearchOnEnter={this.submitSearchOnEnter}
          value={this.state.searchValue}
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
            onClick={this.handleSubmitSearch}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
