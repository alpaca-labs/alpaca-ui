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

const Checkbox = memo(forwardRef((
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
                styles.checkboxRoot,
                color && styles[color],
                disabled && styles.disabled
            )}
        >
            <span className={styles.checkboxWrapper}>
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
                <span className={styles.checkbox}>
                    <svg viewBox="0 0 21 21">
                        <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                    </svg>
                </span>
            </span>
            {label && <span className={styles.checkboxLabel}>{label}</span>}
        </label>
    )
}))

export { Checkbox }