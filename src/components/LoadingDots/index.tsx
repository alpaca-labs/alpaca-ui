import React from 'react';
import styles from './styles/loadingDots.style.scss';
import clsx from 'clsx';

interface ILoadingDots{
  size?: string,
  className?: string
}

const LoadingDots:React.FC<ILoadingDots> = ({size, className}: ILoadingDots) => {
  return (
    <div className={clsx(
      styles.loadingDotsRoot,
      className,
      size === 'small' && styles.small,
      size === 'large' && styles.large
    )}>
      <div className={styles.loadingDots} />
    </div>
  )
}

export { LoadingDots };
