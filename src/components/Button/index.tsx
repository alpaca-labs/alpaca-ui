import clsx from 'clsx'
import React, { useRef } from 'react'
import {Ripple} from '../Ripple/index'
import styles from './styles/button.style.scss'

interface IButton {
  onClick?: any,
  children?: any,
  color?: string,
  variant?: string
  className?: string
}

const Button = ({ onClick, children, color, variant, className }: IButton) => {
  const rippleRef:any = useRef()

  const handleClick = (e:any) => {
    rippleRef.current.addRipple(e)
    if (typeof onClick === 'function') onClick(e)
  }
  return (
    <button
      className={clsx(
        className,
        styles.buttonRoot,
        color === 'primary' && styles.buttonPrimary,
        color === 'secondary' && styles.buttonSecondary,

        variant === 'filled' && styles.buttonFilled
      )}
      onClick={handleClick}
    >
      {children}
      <Ripple ref={rippleRef} color={variant === 'filled' ? null : color} />
    </button>
  )
}

export { Button }
