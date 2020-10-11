import clsx from 'clsx'
import React, { useRef } from 'react'
import { Ripple } from '../Ripple/index'
import Spinner from '../Spinner'

interface IButton {
  onClick?: (event: any) => void
  children?: any
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  variant?: 'filled' | 'outlined'
  className?: string
  type?: "button" | "submit" | "reset"
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<IButton> = ({
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (rippleRef?.current) rippleRef.current.addRipple(e)
    if (typeof onClick === 'function') onClick(e)
  }

  return (
    <button
      className={clsx(
        className,
        "AuiButtonRoot",
        color && `AuiButton-${color}`,
        variant && `AuiButton-${variant}`,
      )}
      onClick={handleClick}
      type={type}
      disabled={loading ? true : disabled}
    >
      <div className="AuiButton-wrapper">
        {
          loading &&
          <Spinner className="AuiButton-spinner" size="small" color={variant === 'filled' ? undefined : color ? color : 'dark'} />
        }
        {children}
      </div>
      <Ripple ref={rippleRef} color={variant === 'filled' ? undefined : color} />
    </button>
  )
}

export { Button }
