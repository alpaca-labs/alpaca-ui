import React, { useRef } from 'react';
import clsx from 'clsx';
import { Ripple } from '../Ripple';

interface ICard {
  className?: string
  variant?: string
  active?: string
  children?: any
  onClick?: (event?: any) => void
  value?: number | string | undefined
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
        "AuiCard-root",
        variant === 'outlined' && "AuiCard-outlined",
        active && "AuiCard-active",
        typeof onClick === 'function' && "AuiCard-selectable",
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
