import { ComponentProps, ReactElement } from 'react'

import * as Styles from './styled'
import { styled } from 'styled-components'

type Props = {
	name?: string
	children?: any
	title?: string
	small?: boolean
	solid?: boolean
	submit?: boolean
	inline?: boolean
	center?: boolean
	default?: boolean
	disabled?: boolean
	readOnly?: boolean
	required?: boolean
	destructive?: boolean
	$transparent?: boolean
	as?: string | ReactElement
} & Omit<ComponentProps<typeof Styles.Container>, 'as'>

export { baseButtonStyles } from './styled'

function ButtonBase(props: Props): ReactElement {
	const {
		name,
		form,
		title,
		style,
		submit,
		inline,
		center,
		readOnly = false,
		required = false,
		children,
		disabled = false,
		destructive,
		solid = submit,
		small = inline,
		$transparent = inline,
		...moreProps
	} = props

	let { onClick } = props

	if (disabled) {
		onClick = () => undefined
	}

	const useButton =
		!submit && (typeof children !== 'string' || moreProps.as !== 'input')

	return (
		<Styles.Container
			name={name}
			form={form}
			style={style}
			small={small}
			solid={solid}
			$center={center}
			onClick={onClick}
			disabled={disabled}
			readOnly={readOnly}
			required={required}
			$destructive={destructive}
			$transparent={$transparent}
			type={submit ? 'submit' : 'button'}
			{...(useButton
				? { as: 'button' as any, children: children || title }
				: { value: children || title })}
			{...moreProps}
		/>
	)
}

export const Button = styled(ButtonBase)``
