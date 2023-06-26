import React from 'react';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends React.Component {
  handleClick = () => {
    const { largeImageURL, onClick } = this.props;
    onClick(largeImageURL);
  };

  render() {
    const { webformatURL } = this.props;

    return (
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles['ImageGalleryItem-image']}
          src={webformatURL}
          alt=""
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
