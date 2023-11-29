import type { ChangeEvent, CSSProperties, ReactElement, ReactNode } from 'react'

import { styled } from '../utils/styled-components'

import { Label } from './styled'

type Props = {
	/** overrides `CSSProperties` */
	style?: CSSProperties
	/** `name` attribute of `input` */
	name: string
	/** Sets the checkbox checked value */
	checked?: boolean
	/** indicates that is required for a certain action */
	required?: boolean
	/** Change callback invoked when the value of the `input` changes */
	onChange?: (event: ChangeEvent<HTMLInputElement>) => any
	/** Content of `label` element */
	label?: ReactNode
	/** `id` attribute of `input` */
	id?: string
	/** Sets the `value` attribute of the `input` */
	value?: string
	/** disables the checkbox when set to `true` */
	disabled?: boolean
	/** control whether the checkbox is in read-only mode */
	readOnly?: boolean
}

const styles = {
	input: { marginRight: 4, flexShrink: 0 },
}

/**
 * Cretia styled checkbox with built-in label.
 */
export function CheckboxBase({
	style = {},
	label,
	name,
	id = name,
	checked = false,
	required = false,
	onChange,
	value,
	disabled,
	readOnly,
}: Props): ReactElement {
	return (
		<Label key={String(checked)} style={style} htmlFor={id}>
			<input
				style={styles.input}
				type="checkbox"
				value={value}
				// Solves strange bug
				className={checked ? 'checked' : ''}
				onChange={onChange}
				name={name}
				required={required}
				{...(checked ? { checked: true } : {})}
				readOnly={readOnly}
				disabled={readOnly || disabled}
				id={id}
			/>
			{label}
		</Label>
	)
}

export const Checkbox = styled(CheckboxBase)``
