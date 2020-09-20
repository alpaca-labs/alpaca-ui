import React, { memo } from 'react'
import styles from './form.module.scss'
import clsx from 'clsx'

interface IFormField{
  id?: any
  className?: string
  label?: string
  children?: any
  error?: string
  valid?: any
  loading?: boolean,
  helperText?: string
  row?: any
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
}:IFormField) => {
  return (
    <div
      className={clsx(
        styles.formGroup,
        row && styles.row,
        error && styles.formGroupError,
        valid && styles.formGroupValid,
        loading && styles.formGroupLoading,
        isPassword && styles.formGroupPassword,
        className,
      )}
    >
      {
        label &&
        <label
          className={styles.formLabel}
          htmlFor={id}
        >
          {label}
        </label>
      }
      {children}
      {
        helperText &&
        <small className={styles.helperText}>{helperText}</small>
      }
    </div>
  )
})

export {FormField}
