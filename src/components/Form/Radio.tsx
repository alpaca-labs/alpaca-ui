import React, { forwardRef, memo } from 'react'
import clsx from 'clsx';

interface Props {
	id?: string
	name?: string
	label?: string
	disabled?: boolean
	onChange?: (data: any) => void
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
				"AuiRadio-root",
				color && `Aui-${color}`,
				disabled && "disabled"
			)}
		>
			<span className="AuiRadioWrapper">
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
				<span className="AuiRadio" />
			</span>
			{label && <span className="AuiRadioLabel">{label}</span>}
		</label>
	)
}))

export { Radio }
