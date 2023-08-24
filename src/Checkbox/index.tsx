import { ChangeEvent, CSSProperties, ReactElement, ReactNode } from 'react'
import { styled } from 'styled-components'

import { Label } from './styled'

type Props = {
	style?: CSSProperties
	name: string
	checked?: boolean
	required?: boolean
	onChange?: (event: ChangeEvent<HTMLInputElement>) => any
	label?: ReactNode
	id?: string
	value?: string
	disabled?: boolean
	readOnly?: boolean
}

const styles = { input: { marginRight: 4, flexShrink: 0 } }

function CheckboxBase(props: Props): ReactElement {
	const {
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
	} = props

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
