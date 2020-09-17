import React from 'react';
import styles from './styles/loadingDots.style.scss';

const LoadingDots:React.FC = () => {
  return (
    <div className={styles.loadingDotsRoot}>
      <div className={styles.loadingDots} />
    </div>
  )
}

export { LoadingDots };
