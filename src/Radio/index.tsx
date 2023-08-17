import { ChangeEvent, ReactElement } from 'react'
import { styled } from 'styled-components'

import * as Styles from './styles'

type Props = {
	value: any
	checked: boolean
	name: string
	label: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	id?: string
}

function RadioBase(props: Props): ReactElement {
	const {
		value,
		checked,
		name,
		onChange,
		label,
		id = `${name}-${value}`,
		...moreProps
	} = props

	return (
		<Styles.Label data-testid="radio-label" htmlFor={id} {...moreProps}>
			{label}
			<input
				key={String(checked)} // FIXES BUG
				type="radio"
				onChange={onChange}
				value={value}
				id={id}
				name={name}
				checked={checked}
				data-testid="radio-input"
			/>
		</Styles.Label>
	)
}

export const Radio = styled(RadioBase)``
