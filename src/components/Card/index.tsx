import React, { useRef } from 'react';
import clsx from 'clsx';
import styles from './styles/card.style.scss';
import { Ripple } from '../Ripple';


interface ICard {
  className: string
  variant: string,
  active: boolean
  children: any
  onClick: any
  value: string
}
const Card = ({
  className,
  variant,
  active,
  children,
  onClick,
  value
}: ICard) => {
  const rippleRef: any = useRef()

  const handleClick = (e: any) => {
    if (rippleRef?.current) rippleRef.current.addRipple(e)
    if (typeof onClick === 'function') onClick(value)
  }
  return (
    <div
      className={clsx(
        styles.card,
        variant === 'outlined' && styles.outline,
        active && styles.active,
        typeof onClick === 'function' && styles.selectable,
        className
      )}
      onClick={handleClick}
    >
      {children}
      {
        typeof onClick === 'function' && <Ripple ref={rippleRef} />
      }
    </div>
  )
}

export { Card };
