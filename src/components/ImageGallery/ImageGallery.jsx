import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import styles from '../ImageGallery/ImageGallery.module.css';

class Gallery extends React.Component {
  state = {
    modalOpen: false,
    selectedImage: null,
  };

  openModal = imageUrl => {
    this.setState({ modalOpen: true, selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, selectedImage: null });
  };

  render() {
    const { images } = this.props;
    const { modalOpen, selectedImage } = this.state;

    return (
      <div>
        <ul className={styles.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              onClick={this.openModal}
            />
          ))}
        </ul>
        {modalOpen && (
          <Modal
            isOpen={modalOpen}
            onClose={this.closeModal}
            imageUrl={selectedImage}
            altText="Modal Image"
          />
        )}
      </div>
    );
  }
}

export default Gallery;
