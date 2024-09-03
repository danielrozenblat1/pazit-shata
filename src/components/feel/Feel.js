import React from 'react';
import styles from './Feel.module.css';

const Rectangle = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Rectangle;