import clsx from 'clsx'
import React, { useRef } from 'react'
import {Ripple} from '../Ripple/index'
import Spinner from '../Spinner'
import styles from './styles/button.style.scss'

interface IButton {
  onClick?: any,
  children?: any,
  color?: 'primary' | 'secondary',
  variant?: string
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  loading?: boolean
  disabled?: boolean
}

const Button:React.FC<IButton> = ({
  onClick,
  children,
  color,
  variant,
  className,
  type = 'button',
  loading = false,
  disabled = false,
}) => {
  const rippleRef = useRef<any | null>()

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (rippleRef?.current) rippleRef.current.addRipple(e)
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
      type={type}
      disabled={loading ? true : disabled}
    >
      <div className={styles.buttonWrapper}>
        {
          loading &&
          <Spinner className={styles.spinner} size="small" color={variant === 'filled' ? undefined : color ? color : 'dark'} />
        }
        {children}
      </div>
      <Ripple ref={rippleRef} color={variant === 'filled' ? null : color} />
    </button>
  )
}

export { Button }
