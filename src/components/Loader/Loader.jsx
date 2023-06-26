import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import styles from '../Loader/Loader.module.css';

const MyLoader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <BallTriangle
        type="BallTriangle"
        color="#00BFFF"
        height={200}
        width={200}
      />
    </div>
  );
};

export default MyLoader;
