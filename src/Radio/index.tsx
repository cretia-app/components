import type { ChangeEvent, ReactElement } from 'react'
import { styled } from 'styled-components'

import * as Styles from './styles'

interface Props {
	/**
	 * selected option by input value (fully controlled)
	 * When passing a `value` prop, you must use the `onChange`
	 * hanlder to update the `value`
	 */
	value: any
	/** Sets the radio checked value */
	checked: boolean
	/** `name` attribute of `input` */
	name: string
	/** Content of `label` element */
	label: string
	/** change callback invoked with input value */
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	/** Optional value for `id` attribute */
	id?: string
}

/**Radio button styled by Cretia */

export function RadioBase({
	value,
	checked,
	name,
	onChange,
	label,
	id = `${name}-${value}`,
	...moreProps
}: Props): ReactElement {
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
