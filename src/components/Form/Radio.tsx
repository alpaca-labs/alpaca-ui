import React, { forwardRef, memo } from 'react'
import styles from './form.module.scss';
import clsx from 'clsx';

interface Props {
    id?: string
    name?: string
    label?: string
    disabled?: boolean
    onChange?: (data:any) => void
    value?: string | number
    checked?: boolean
    color?: "primary" | "secondary"
    inputProps?: object
}

const Radio = memo(forwardRef((
    {
        id,
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
                styles.radioRoot,
                color && styles[color],
                disabled && styles.disabled
            )}
        >
            <span className={styles.radioWrapper}>
                <input
                    {...inputProps}
                    type="radio"
                    id={id || name}
                    name={name}
                    disabled={disabled}
                    checked={checked}
                    value={value}
                    onChange={onChange}
                    ref={ref}
                />
                <span className={styles.radio} />
            </span>
            {label && <span className={styles.radioLabel}>{label}</span>}
        </label>
    )
}))

export { Radio }