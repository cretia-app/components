import { forwardRef } from 'react'
import { IconSearch } from '@tabler/icons-react'
import Cleave from 'cleave.js/react'
import type {
	ChangeEvent,
	ComponentProps,
	CSSProperties,
	ReactNode,
} from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { styled } from '../utils/styled-components'

import { ErrorMessage } from '../ErrorMessage'
import { Tooltip } from '../Tooltip'

import 'cleave.js/dist/addons/cleave-phone.mx.js'

import * as Styles from './styles'

type Props = {
	autoComplete?: string
	containerStyle?: CSSProperties
	disabled?: boolean
	error?: string | false
	format?: {
		numeral?: true
		numeralThousandsGroupStyle?: 'thousand'
		time?: true
		phone?: true
		creditCard?: true
		onCreditCardTypeChanged?: (type: string) => void
		phoneRegionCode?: string
		timePattern?: ('h' | 'm' | 'y' | 'Y' | 'd')[]
		prefix?: string
		delimiter?: string
		blocks?: number[]
		uppercase?: boolean
	}
	forceBorder?: boolean
	hint?: string
	label?: string
	multiline?: boolean
	onChange?: (
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => void
	placeholder?: string
	readOnly?: boolean
	style?: CSSProperties
	tabIndex?: number
	type?: any
	noOptionsMessage?: (obj: { inputValue: string }) => ReactNode
	min?: string
	id?: string
	as?: string
	max?: string
	minRows?: number
	prefix?: string
	postfix?: string
} & ComponentProps<typeof Styles.Input>

export const { TextInputContainer } = Styles
export const { LabelContainer } = Styles

const TextInputBase = forwardRef(function TextInputWithRef(
	props: Props,
	ref: any,
) {
	const {
		type = 'text',
		error,
		name,
		prefix,
		postfix,
		multiline = false,
		containerStyle,
		hint = undefined,
		disabled = false,
		format = undefined,
		as: asElement = 'input',
		forceBorder = type === 'search',
		id = name,
		...otherProps
	} = props
	const borderless = !props.label && !forceBorder

	let Element: any = asElement
	if (format) Element = Cleave
	if (multiline) Element = TextareaAutosize

	const input = (
		<Styles.Input
			as={Element}
			{...(format ? { options: format } : {})}
			{...(error ? { ['aria-invalid']: true } : {})}
			ref={ref}
			$prefix={Boolean(prefix)}
			$postfix={Boolean(postfix)}
			name={name}
			id={id}
			placeholder={props.placeholder || props.label}
			onChange={props.onChange}
			readOnly={props.readOnly}
			required={props.required}
			noOptionsMessage={props.noOptionsMessage}
			tabIndex={props.tabIndex}
			disabled={disabled}
			onBlur={props.onBlur}
			min={props.min}
			max={props.max}
			type={type}
			$isSearch={type === 'search'}
			$borderless={borderless}
			$align={postfix ? 'right' : undefined}
			// onKeyDown={handleKeyDown}
			{...otherProps}
		/>
	)

	return (
		<Styles.TextInputContainer
			style={containerStyle}
			data-testid="text-container"
			$prefix={prefix}
			$postfix={postfix}
		>
			{type === 'search' && (
				<IconSearch
					color="var(--human-color--text-tertiary)"
					size={18}
					style={{ position: 'absolute', top: 7, left: 7 }}
					aria-hidden
				/>
			)}
			{props.label ? (
				<label htmlFor={id}>
					<Styles.LabelContainer>
						<span>
							{`${props.label}`}
							{Boolean(props.required) && (
								<span style={{ fontSize: '0.8rem', opacity: 0.6 }}>*</span>
							)}
						</span>
						{Boolean(hint) && (
							<Tooltip content={hint}>
								<Styles.HintIcon>?</Styles.HintIcon>
							</Tooltip>
						)}
					</Styles.LabelContainer>
					{input}
				</label>
			) : (
				input
			)}
			{Boolean(error) && (
				<ErrorMessage aria-live="assertive" aria-relevant="additions removals">
					{error}
				</ErrorMessage>
			)}
		</Styles.TextInputContainer>
	)
})

export const TextInput = styled(TextInputBase)``
