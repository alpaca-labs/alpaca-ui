import React, { forwardRef, memo } from 'react'
import clsx from 'clsx';

interface Props {
  id?: string
  className?: string
  name?: string
  label?: string
  disabled?: boolean
  onChange?: (data: any) => void
  value?: string | number
  checked?: boolean
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  inputProps?: object
}

const Checkbox = memo(forwardRef((
  {
    id,
    className,
    name,
    label,
    disabled,
    onChange,
    value,
    checked,
    color,
    inputProps,
  }: Props,
  ref: any
) => {
  return (
    <label
      className={clsx(
        "AuiCheckbox-root",
        color && `Aui-${color}`,
        disabled && "disabled",
        className
      )}
    >
      <span className="AuiCheckboxWrapper">
        <input
          {...inputProps}
          type="checkbox"
          id={id || name}
          name={name}
          disabled={disabled}
          checked={checked}
          value={value}
          onChange={onChange}
          ref={ref}
        />
        <span className="AuiCheckbox">
          <svg viewBox="0 0 21 21">
            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
          </svg>
        </span>
      </span>
      {label && <span className="AuiCheckboxLabel">{label}</span>}
    </label>
  )
}))

export { Checkbox }
