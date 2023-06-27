import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Gallery from './ImageGallery/ImageGallery';
import { getPicture } from './services/getPicture';
import MyLoader from './Loader/Loader';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import styles from './App.module.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    images: [],
    page: 1,
    searchText: '',
    isLoading: false,
    isFirstLoad: true,
    totalHits: 0,
  };

  handleSearch = searchText => {
    this.setState({ images: [], page: 1, searchText, isLoading: true });
    this.fetchImages(searchText, 1);
  };

  handleLoadMore = () => {
    const { searchText, page } = this.state;
    const nextPage = page + 1;
    this.fetchImages(searchText, nextPage);
  };

  fetchImages = (searchText, page) => {
    getPicture(searchText, page)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching images');
        }
        return response.json();
      })
      .then(data => {
        const newImages = data.hits.map(hit => ({
          id: hit.id,
          webformatURL: hit.webformatURL,
          largeImageURL: hit.largeImageURL,
        }));
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: page,
          isLoading: false,
          isFirstLoad: false,
          totalHits: data.totalHits,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false, isFirstLoad: false });
      });
  };

  render() {
    const { images, isLoading, isFirstLoad, totalHits } = this.state;
    const loadedImagesCount = images.length;
    const showLoadMoreButton = loadedImagesCount < totalHits;

    return (
      <div className={styles.App}>
        <SearchBar handleSearch={this.handleSearch} />
        {isLoading ? (
          <MyLoader />
        ) : (
          <>
            {!isFirstLoad && images.length === 0 && (
              <p className={styles.NoImageText}>No images found😢</p>
            )}
            {images.length > 0 && (
              <>
                <Gallery images={images} />
                {showLoadMoreButton && (
                  <LoadMoreButton onClick={this.handleLoadMore} />
                )}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  searchText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFirstLoad: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};

export default App;
