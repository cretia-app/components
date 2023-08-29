import type { ChangeEvent, ReactElement } from 'react'
import { styled } from 'styled-components'

import * as Styled from './styled'

interface Props {
	/** Content of `label` element */
	label: string
	/** Sets the `value` attribute of the `input` */
	value: any
	/** `name` attribute of `input` */
	name: string
	/** `id` attribute of the file */
	id?: string
	/** disables the access to file when set to `true` */
	disabled?: boolean
	/** sets dark styles when set to `true`*/
	dark?: boolean
	accept?: string
	/** acceps a url for the file preview */
	previewUrl?: string
	/** Change callback invoked when the value of the `input` changes */
	onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined
	/** removes the `padding` when set to `true` */
	paddingless?: boolean
}

export function FileBase(props: Props): ReactElement {
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
