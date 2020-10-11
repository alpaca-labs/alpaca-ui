import React, { Children, cloneElement, forwardRef, memo, useEffect, useState } from 'react'
import clsx from 'clsx';

interface Props {
  label?: string
  className?: string
  name?: string
  onChange?: (data: any) => void
  value?: string | number
  defaultValue?: any
  children?: any
  row?: boolean
}

const RadioGroup = memo(forwardRef((
  {
    label,
    className,
    name,
    onChange,
    value,
    defaultValue,
    children,
    row
  }: Props,
  ref: any
) => {
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    if (defaultValue) setCurrentValue(defaultValue)
  }, [])

  const handleChange = (e: any) => {
    setCurrentValue(e.target.value)
    if (typeof onChange === 'function') onChange(e)
  }

  return (
    <fieldset
      className={clsx(
        "AuiFormGroup AuiRadioGroup",
        row && "row",
        className
      )}
    >
      {
        label && <legend className="AuiFormGrouplabel">{label}</legend>
      }
      {Children.map(children, (child) =>
        child ?
          cloneElement(child, {
            name: name,
            checked: value ? value === child?.props?.value : currentValue === child?.props?.value,
            ref: ref,
            onChange: handleChange
          })
          :
          null
      )}
    </fieldset>
  )
}))

export { RadioGroup }
