import type { ReactElement } from 'react'
import { TwitterPicker } from 'react-color'

import { useToggle } from '@/utils'

import * as Styled from './styled'
import { styled } from 'styled-components'

interface Props {
	value: string
	name: string
	readOnly?: boolean
	error?: string | false
	onChange?: (value: any) => void
}

function ColorPickerBase({
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
