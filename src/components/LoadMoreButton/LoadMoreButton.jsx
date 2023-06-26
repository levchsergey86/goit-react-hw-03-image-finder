import React from 'react';
import styles from '../LoadMoreButton/LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className={styles.LoadMoreButtonContainer}>
      <button className={styles.LoadMoreButton} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
