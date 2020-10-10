import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string
  size?: 'small' | 'large'
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'dark'
}

const Spinner = ({ className, size, color }: Props) => (
  <span className={clsx(
    "AuiSpinner",
    size,
    color,
    className
  )} />
);

export default Spinner;
