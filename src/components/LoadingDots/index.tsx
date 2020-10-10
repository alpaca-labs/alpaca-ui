import React from 'react';
import clsx from 'clsx';

interface ILoadingDots {
  size?: 'small' | 'large',
  className?: string
}

const LoadingDots: React.FC<ILoadingDots> = ({ size, className }: ILoadingDots) => {
  return (
    <div className={clsx(
      "AuiLoadingDots-root",
      className,
      size && `AuiLoadingDots-${size}`
    )}>
      <div className="AuiLoadingDots" />
    </div>
  )
}

export { LoadingDots };
