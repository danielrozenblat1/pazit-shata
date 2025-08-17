import React, { useRef, useEffect } from 'react';
import { Player } from '@lordicon/react';
import styles from './Feel.module.css';

const Rectangle = ({ icon, title, description }) => {
  const playerRef1 = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);

  return (
<div className={styles.container}>
  <div className={styles.iconContainer}>
    <div className={styles.icon}>
      <Player 
        icon={icon} 
        ref={playerRef1} 
        size="100%" 
        loop={true} 
        onComplete={handleComplete}
      />
    </div>
  </div>
  <div className={styles.contentContainer}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
  </div>
</div>
  );
};

export default Rectangle;