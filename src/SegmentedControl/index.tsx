import { ComponentProps, ReactElement } from 'react'
import { styled } from 'styled-components'

import * as Styles from './styles'

type Segment = {
	value: any
	label: string
	id?: string
}

interface Props {
	/** Sets the `value` attribute of the `input` */
	value: any
	/** `id` attribute of `input` */
	id?: string
	name?: string
	/** Content of `label` element */
	label?: string
	/**Array of segment objects composed of:
	 *
	 *  `{ value: '', label: '', id: ''}`
	 *
	 * */
	segments: Segment[]
	/** Change callback invoked when the value of the `input` changes */
	onChange: (_: { target: { name?: string; value?: any } }) => unknown
	/** disables the segmented control when set to `true` */
	disabled?: boolean
	/** control whether the segmented control is in read-only mode */
	readOnly?: boolean
}

/** Make a selection from a set of mutually exclusive options. */

export function SegmentedControlBase(
	props: Props & Omit<ComponentProps<typeof Styles.Container>, 'onChange'>,
): ReactElement {
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
