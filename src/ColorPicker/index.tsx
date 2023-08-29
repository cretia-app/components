import type { ReactElement } from 'react'
import { TwitterPicker } from 'react-color'
import { styled } from 'styled-components'

import { useToggle } from '@/utils'

import * as Styled from './styled'

interface Props {
	value: string
	/** `name` attribute of `input` */
	name: string
	/** control whether the color picker is in read-only mode */
	readOnly?: boolean
	/** displayed if theres an error message as `string` */
	error?: string | false
	/** Change callback invoked when the value of the `input` changes */
	onChange?: (value: any) => void
}

/**
 * Select a color from the range displayed to replace the component value with
 *
 * it's correspondant HEX
 */

export function ColorPickerBase({
	value = '#ffffff',
	onChange = () => undefined,
	name,
	error,
	readOnly = false,
	...moreProps
}: Props): ReactElement {
	const [open, toggleOpen] = useToggle()

	return (
		<Styled.Container {...moreProps}>
			<button
				type="button"
				disabled={readOnly}
				onClick={() => toggleOpen()}
				onFocus={() => toggleOpen()}
				{...(error ? { ['aria-invalid']: true } : {})}
			>
				<Styled.ColorPreview value={value} />
			</button>
			{Boolean(!readOnly && open) && (
				<TwitterPicker
					color={value}
					onChangeComplete={({ hex }) => {
						onChange({ target: { name, value: hex } })
						toggleOpen()
					}}
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					style={{ position: 'absolute' }}
				/>
			)}
			{Boolean(error && { ['aria-invalid']: true }) && (
				<Styled.ErrorMessage
					aria-live="assertive"
					aria-relevant="additions removals"
				>
					{error}
				</Styled.ErrorMessage>
			)}
		</Styled.Container>
	)
}

export const ColorPicker = styled(ColorPickerBase)``
