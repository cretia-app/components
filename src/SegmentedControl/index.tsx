import { ComponentProps, ReactElement } from 'react'
import { styled } from 'styled-components'

import * as Styles from './styles'

type Segment = {
	value: any
	label: string
	id?: string
}

type Props = {
	value: any
	id?: string
	name?: string
	label?: string
	segments: Segment[]
	onChange: (_: { target: { name?: string; value?: any } }) => unknown
	disabled?: boolean
	readOnly?: boolean
} & Omit<ComponentProps<typeof Styles.Container>, 'onChange'>

function SegmentedControlBase(props: Props): ReactElement {
	const {
		name,
		segments,
		onChange,
		value,
		label,
		id,
		readOnly,
		disabled = readOnly,
		...otherProps
	} = props

	return (
		<Styles.Container {...otherProps}>
			{label}
			<Styles.Content htmlFor={id}>
				{segments.map((segment) => {
					return (
						<Styles.Segment
							key={segment.value}
							type="button"
							selected={value === segment.value}
							id={segment.label}
							disabled={disabled}
							onClick={() =>
								onChange({ target: { name, value: segment.value } })
							}
						>
							{segment.label}
						</Styles.Segment>
					)
				})}
			</Styles.Content>
		</Styles.Container>
	)
}

export const SegmentedControl = styled(SegmentedControlBase)``
