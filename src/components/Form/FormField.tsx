import React, { memo } from 'react'
import clsx from 'clsx'

interface IFormField {
  id?: any
  className?: string
  label?: string
  children?: any
  error?: string | boolean
  valid?: string | boolean
  loading?: boolean
  helperText?: string
  row?: boolean
  isPassword?: boolean
}

const FormField = memo(({
  id,
  className,
  label,
  children,
  error,
  valid,
  loading,
  helperText,
  row,
  isPassword
}: IFormField) => {
  return (
    <div
      className={clsx(
        "AuiFormGroup",
        row && "AuiFormGroup-row",
        error && "AuiFormGroup-error",
        valid && "AuiFormGroup-valid",
        loading && "AuiFormGroup-loading",
        isPassword && "AuiFormGroup-password",
        className,
      )}
    >
      {
        label &&
        <label
          className="AuiFormGrouplabel"
          htmlFor={id}
        >
          {label}
        </label>
      }
      {children}
      {
        helperText &&
        <small className="AuiHelperText">{helperText}</small>
      }
    </div>
  )
})

export { FormField }
