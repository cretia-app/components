import type { ChangeEvent, ReactElement } from 'react'
import { styled } from 'styled-components'

import * as Styled from './styled'

interface Props {
	label: string
	value: any
	name: string
	id?: string
	disabled?: boolean
	dark?: boolean
	accept?: string
	previewUrl?: string
	onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined
	paddingless?: boolean
}

function FileBase(props: Props): ReactElement {
	const {
		label,
		value,
		name,
		accept,
		onChange,
		previewUrl,
		id = name,
		disabled = false,
		dark = false,
		paddingless = false,
	} = props

	return (
		<Styled.Label
			data-testid="file-label"
			$hasPreview={Boolean(previewUrl)}
			htmlFor={id}
			$dark={dark}
		>
			{Boolean(label) && <strong>{label}</strong>}
			{Boolean(previewUrl) && (
				<Styled.Preview $paddingless={paddingless}>
					<img
						key={
							previewUrl?.split('?')[1] === 'key'
								? previewUrl?.split('?')[1].split('=')[1]
								: null
						}
						src={previewUrl}
						alt={name}
						data-testid="file-image"
					/>
				</Styled.Preview>
			)}
			<input
				type="file"
				accept={accept}
				onChange={onChange}
				value={value}
				id={id}
				name={name}
				disabled={disabled}
				data-testid="file-input"
			/>
		</Styled.Label>
	)
}

export const File = styled(FileBase)``
