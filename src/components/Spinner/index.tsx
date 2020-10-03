import clsx from 'clsx';
import React from 'react';
import styles from './spinner.module.scss';

interface Props {
    className: string
    size: any
    color: any
}

const Spinner = ({ className, size, color }: Props) => (
  <span className={clsx(
    styles.loader,
    size && styles[size],
    color && styles[color],
    className
  )} />
);

export default Spinner;
