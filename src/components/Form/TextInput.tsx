import clsx from 'clsx';
import React, { forwardRef, memo, useMemo, useState } from 'react';
import { LoadingDots } from '../LoadingDots';
import { FormField } from './FormField';
import { Eye } from '../Icon';
import { Button } from '../Button';

interface ITextInput {
  id?: any
  name?: string
  value?: any
  label?: string
  onChange?: (data: any) => void
  onBlur?: (data: any) => void
  error?: any
  valid?: boolean
  loading?: boolean
  helperText?: any
  placeholder?: string
  multiline?: boolean
  autoComplete?: string
  spellCheck?: boolean
  readOnly?: any
  disabled?: boolean
  row?: boolean
  append?: any
  prepend?: any
  password?: boolean
  className?: string
  inputProps?: object
  textareaProps?: object
}

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
    inputProps,
    textareaProps,
  }: ITextInput,
  ref: any
) => {
  const [showPassword, setShowPassword] = useState(false);

  const componentInput = useMemo(() => {
    if (multiline) return <textarea
      {...textareaProps}
      id={id || name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      autoComplete={autoComplete}
      spellCheck={spellCheck}
      ref={ref}
    />
    return <input
      {...inputProps}
      id={id || name}
      name={name}
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
  }, [multiline, value, disabled, password, autoComplete, id, name, onBlur, onChange, placeholder, readOnly, ref, spellCheck, showPassword, textareaProps, inputProps])

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
        "AuiInputWrapper",
        (append || prepend) && "AuiInputGroup"
      )}>
        {
          prepend &&
          <div className="AuiInputGroupPrepend">
            <span>
              {prepend}
            </span>
          </div>
        }
        <div className="AuiFormControl">
          {componentInput}
          {
            loading &&
            <LoadingDots className="AuiLoadingInput" size="small" />
          }
          {
            password &&
            <Button className="AuiButtonEye" onClick={() => setShowPassword(!showPassword)}><Eye className={clsx("eyeIcon", showPassword && "show")} /></Button>
          }
          {
            valid &&
            <svg className="AuiValidIcon" viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
            </svg>
          }
        </div>
        {
          append &&
          <div className="AuiInputGroupAppend">
            <span>
              {append}
            </span>
          </div>
        }
      </div>
    </FormField>
  )
}));

export { TextInput };
