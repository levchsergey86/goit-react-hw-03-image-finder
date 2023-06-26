import React from 'react';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
