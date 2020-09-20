import clsx from 'clsx';
import React, { forwardRef, memo, useMemo, useState } from 'react';
import { LoadingDots } from '../LoadingDots';
import { FormField } from './FormField';
import styles from './form.module.scss';
import * as Icons from '../Icon';
import { Button } from '../Button';

const { Eye } = Icons
const TextInput = memo(forwardRef((
  {
    id,
    name,
    value,
    label,
    onChange,
    onBlur,
    error,
    valid,
    loading,
    helperText,
    placeholder,
    multiline,
    autoComplete = "off",
    spellCheck = false,
    readOnly,
    disabled,
    row,
    append,
    prepend,
    password,
    className,
  },
  ref:any
) => {
  const [showPassword, setShowPassword] = useState(false);

  const componentInput = useMemo(() => {
    if (multiline) return <textarea
      className={styles.formControl}
      id={id || name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
    return <input
      className={styles.formControl}
      id={id || name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      autoComplete={autoComplete}
      spellCheck={spellCheck}
      type={password && !showPassword ? 'password' : 'text'}
      ref={ref}
    />
  }, [multiline, value, disabled, password, autoComplete, id, name, onBlur, onChange, placeholder, readOnly, ref, spellCheck, showPassword])

  return (
    <FormField
      className={className}
      id={id || name}
      row={row}
      label={label}
      error={error}
      helperText={helperText}
      loading={loading}
      valid={valid}
      isPassword={password}
    >
      <div className={clsx(
        styles.inputWrapper,
        (append || prepend) && styles.inputGroup
      )}>
        {
          prepend &&
          <div className={styles.inputGroupPrepend}>
            <span>
              {prepend}
            </span>
          </div>
        }
        {componentInput}
        {
          append &&
          <div className={styles.inputGroupAppend}>
            <span>
              {append}
            </span>
          </div>
        }
        {
          (loading)
          &&
          <LoadingDots className={styles.loadingInput} size="small" />
        }
        {
          (password)
          &&
          <Button className={styles.buttonEye} onClick={() => setShowPassword(!showPassword)}><Eye className={clsx(styles.eyeIcon, showPassword && styles.show)} /></Button>
        }
      </div>
    </FormField>
  )
}));

export { TextInput };
