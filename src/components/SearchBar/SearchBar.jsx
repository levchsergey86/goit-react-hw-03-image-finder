import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';

class SearchBar extends React.Component {
  state = {
    searchText: '',
  };

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.searchText);
  };

  render() {
    const { searchText } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles['SearchForm-button']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#007BFF"
            >
              <path d="M15.3 14.88l5.74 5.74a1 1 0 0 1-1.42 1.42l-5.74-5.74a8 8 0 1 1 1.42-1.42zM9 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
            </svg>
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchText}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
